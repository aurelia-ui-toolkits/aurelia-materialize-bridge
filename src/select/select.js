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
	@bindable() readonly = false;
  readonlyChanged() {
    if (this.readonly) {
      this.makeReadonly($(this.element).siblings('input')[0]);
    } else {
      this.refresh();
    }
  }

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

    this.handleFocus = this.handleFocus.bind(this);
  }

  attached() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    let div = $('<div class="input-field"></div>');
    let va = this.element.attributes.getNamedItem('validate');
    if (va) {
      div.attr(va.name, va.label);
    }

    $(this.element).wrap(div);
    if (this.label) {
      $(`<label class="md-select-label">${this.label}</label>`).insertAfter(this.element);
    }

    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(false);
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    let $element = $(this.element);
    $element.off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $element.siblings(`ul#select-options-${$element.data('select-id')}`).remove();
    $element.material_select('destroy');
    $element.siblings('label').remove();
    $element.siblings('.md-input-validation').remove();
    $element.unwrap();
    this.subscriptions.forEach(sub => sub.dispose());
  }

  refresh() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(true);
    });
  }

  labelChanged(newValue) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    this.updateLabel();
  }

  updateLabel() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
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
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    let input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  }

  notifyBindingEngine() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    this.log.debug('selectedOptions changed', arguments);
  }

  handleChangeFromNativeSelect() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  }

  handleChangeFromViewModel(newValue) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  }

  toggleControl(disable) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
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
      }
    }
  }

  createMaterialSelect(destroy) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    let input = $(this.element).siblings('input');
    let isValid = input.hasClass('valid');
    let isInvalid = input.hasClass('invalid');
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    input = $(this.element).siblings('input');
    if (isValid) {
      input.addClass('valid');
    }
    if (isInvalid) {
      input.addClass('invalid');
    }
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
    if (this.readonly) {
      this.makeReadonly(input[0]);
    }
  }

  makeReadonly(input) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    $(input).off('click');
    $(input).off('focus');
    $(input).off('keydown');
    $(input).off('open');
  }

  observeVisibleDropdownContent(attach) {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
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
          } else {
            this.handleFocus();
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
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
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

  open() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    $(this.element).siblings('input.select-dropdown').trigger('focus');
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
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(() => {
      this.log.debug('fire blur event');
      fireEvent(this.element, 'blur');
      this._taskqueueRunning = false;

      if (this.label) {
        const $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
        $label.removeClass('md-focused');
      }
    });
  }

  handleFocus() {
    if ((this.element).classList.contains('browser-default')) {
      return;
    }
    if (this.label) {
      const $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.addClass('md-focused');
    }
  }
}
