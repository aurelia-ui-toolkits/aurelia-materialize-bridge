import {bindable, customAttribute} from 'aurelia-templating';
import {BindingEngine} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';
import {getLogger} from 'aurelia-logging';
import {fireEvent} from '../common/events';
import {getBooleanFromAttributeValue} from '../common/attributes';
import {DOM} from 'aurelia-pal';

@inject(Element, BindingEngine, TaskQueue)
@customAttribute('md-select')
export class MdSelect {
  @bindable() disabled = false;
  @bindable() enableOptionObserver = false;
  @bindable() label = '';
  @bindable() showErrortext = true;
  _suspendUpdate = false;
  subscriptions = [];
  input = null;
  dropdownMutationObserver = null;
  optionsMutationObserver = null;

  constructor(element, bindingEngine, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = getLogger('md-select');
    this.bindingEngine = bindingEngine;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(false);

      let wrapper = $(this.element).parent('.select-wrapper');
      if (this.label && !wrapper.siblings("label").length) {
        let div = $('<div class="input-field"></div>');
        let va = this.element.attributes.getNamedItem('validate');
        if (va) {
          div.attr(va.name, va.label);
        }
        wrapper.wrap(div);
        $(`<label class="md-select-label">${this.label}</label>`).insertAfter(wrapper);
      }
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $(this.element).parent().children(".md-input-validation").remove();
    $(this.element).parent().children(`ul#select-options-${$(this.element).data('select-id')}`).remove();
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(sub => sub.dispose());
  }

  refresh() {
    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(true);
    });
  }

  labelChanged(newValue) {
    this.updateLabel();
  }

  updateLabel() {
    if (this.label) {
      const $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.text(this.label);
    }
  }

  disabledChanged(newValue) {
    this.toggleControl(newValue);
  }

  showErrortextChanged() {
    this.setErrorTextAttribute();
  }

  setErrorTextAttribute() {
    let input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  }

  notifyBindingEngine() {
    this.log.debug('selectedOptions changed', arguments);
  }

  handleChangeFromNativeSelect() {
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  }

  handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  }

  toggleControl(disable) {
    let $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (disable) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
        $('.select-dropdown', $wrapper).dropdown({'hover': false, 'closeOnClick': false});
      }
    }
  }

  createMaterialSelect(destroy) {
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
  }

  observeVisibleDropdownContent(attach) {
    if (attach) {
      if (!this.dropdownMutationObserver) {
        this.dropdownMutationObserver = DOM.createMutationObserver(mutations => {
          let isHidden = false;
          for (let mutation of mutations) {
            if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
              isHidden = true;
            }
          }
          if (isHidden) {
            this.dropdownMutationObserver.takeRecords();
            this.handleBlur();
          }
        });
      }
      this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
        attributes: true,
        attributeFilter: ['style']
      });
    } else {
      if (this.dropdownMutationObserver) {
        this.dropdownMutationObserver.disconnect();
        this.dropdownMutationObserver.takeRecords();
      }
    }
  }

  observeOptions(attach) {
    if (getBooleanFromAttributeValue(this.enableOptionObserver)) {
      if (attach) {
        if (!this.optionsMutationObserver) {
          this.optionsMutationObserver = DOM.createMutationObserver(mutations => {
            // this.log.debug('observeOptions', mutations);
            this.refresh();
          });
        }
        this.optionsMutationObserver.observe(this.element, {
          // childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        if (this.optionsMutationObserver) {
          this.optionsMutationObserver.disconnect();
          this.optionsMutationObserver.takeRecords();
        }
      }
    }
  }

  //
  // Firefox sometimes fire blur several times in a row
  // observable at http://localhost:3000/#/samples/select/
  // when enable 'Disable Functionality', open that list and
  // then open 'Basic use' list.
  // Chrome - ok
  // IE 11 - ok
  // Edge ?
  //
  _taskqueueRunning = false;

  handleBlur() {
    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(() => {
      this.log.debug('fire blur event');
      fireEvent(this.element, 'blur');
      this._taskqueueRunning = false;
    });
  }
}
