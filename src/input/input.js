import {bindable, customElement} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';
import {getBooleanFromAttributeValue} from '../common/attributes';
import {MdInputUpdateService} from './input-update-service';
import {fireEvent} from '../common/events';

@customElement('md-input')
@inject(Element, TaskQueue, MdInputUpdateService)
export class MdInput {
  static id = 0;

  @bindable() mdLabel = '';
  @bindable() mdBlurOnEnter = false;
  @bindable() mdDisabled = false;
  @bindable() mdReadonly = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdPlaceholder = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTextArea = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdType = 'text';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdStep = 'any';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdValidate = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdShowErrortext = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdUpdateTrigger = ['input', 'change'];
  @bindable() mdValidateError;
  @bindable() mdValidateSuccess;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMin = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMax = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdName = '';

  _suspendUpdate = false;

  constructor(element, taskQueue, updateService) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = `md-input-${MdInput.id++}`;
    this.updateService = updateService;
    this.blurOnEnter = this.blurOnEnter.bind(this);
  }

  bind() {
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
    this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError)  {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdValidateSuccess)  {
      this.label.setAttribute('data-success', this.mdValidateSuccess);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
    }
    if (this.mdShowErrortext) {
      this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
    }
    this.updateService.update();

    // special case: time inputs are not covered by Materialize
    if (this.mdType === 'time') {
      $(this.input).siblings('label').addClass('active');
    }
    this.attachEventHandlers();
    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
  }

  detached() {
    this.detachEventHandlers();
    this.element.mdUnrenderValidateResult = null;
    this.element.mdRenderValidateResult = null;
  }

  blur() {
    fireEvent(this.element, 'blur');
  }

  focus() {
    this.input.focus();
    fireEvent(this.element, 'focus');
  }

  mdValueChanged() {
    if (!$(this.input).is(':focus')) {
      this.updateService.update();
    }
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  }

  attachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.addEventListener('keyup', this.blurOnEnter);
    }
  }

  detachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.removeEventListener('keyup', this.blurOnEnter);
    }
  }

  blurOnEnter(e) {
    if (e.keyCode && e.keyCode === 13) {
      this.input.blur();
    }
  }

  mdUnrenderValidateResults = (results, renderer) => {
    for(let result of results) {
      if (!result.valid) {
        renderer.removeMessage(this.element, result);
      }
    }
    renderer.removeValidationClasses(this.input);
  };

  mdRenderValidateResults = (results, renderer) => {
    if(this.label && results.find(x => !x.valid)) {
      this.label.removeAttribute('data-error');
    }
    if (this.input) {
      for(let result of results) {
        if (!result.valid) {
          result.target = this.input;
          if(this.input.hasAttribute('data-show-errortext')) {
            renderer.addMessage(this.element, result);
          }
        }
      }
    }
    renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
  };

}
