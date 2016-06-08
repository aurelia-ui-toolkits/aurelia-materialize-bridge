import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { MdInputUpdateService } from './input-update-service';

@customElement('md-input')
@inject(Element, TaskQueue, MdInputUpdateService)
export class MdInput {
  static id = 0;

  @bindable() mdLabel = '';
  @bindable() mdDisabled = false;
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
  }) mdValidate = false;
  @bindable() mdValidateError;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = '';

  constructor(element, taskQueue, updateService) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = `md-input-${MdInput.id++}`;
    this.updateService = updateService;
  }

  bind() {
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError)  {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
      this.updateService.update();
    }
  }

  mdValueChanged() {
    this.updateService.update();
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  }
}
