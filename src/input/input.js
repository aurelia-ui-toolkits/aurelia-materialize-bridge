import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-input')
@inject(Element, TaskQueue)
export class MdInput {
  static id = 0;

  @bindable() mdLabel = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdPlaceholder = '';@bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTextArea = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdValidate = false;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = '';

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = `md-input-${MdInput.id++}`;
  }

  attached() {
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
      this.update();
    }
  }

  mdValueChanged() {
    this.update();
  }

  update() {
    this.taskQueue.queueMicroTask(() => {
      Materialize.updateTextFields();
      if (this.mdTextArea) {
        $(this.input).trigger('autoresize');
      }
    });
  }
}
