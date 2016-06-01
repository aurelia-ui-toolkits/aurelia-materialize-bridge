import { customAttribute } from 'aurelia-templating';
import { BindingEngine } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import * as LogManager from 'aurelia-logging';
import { fireEvent } from '../common/events';

@inject(Element, LogManager, BindingEngine, TaskQueue)
@customAttribute('md-select')
export class MdSelect {
  _suspendUpdate = false;
  subscriptions = [];

  constructor(element, logManager, bindingEngine, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.bindingEngine = bindingEngine;
  }
  attached() {
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));
    // this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'selectedOptions').subscribe(this.notifyBindingEngine.bind(this)));
    // $(this.element).material_select(() => {
    //   this.log.warn('materialize callback', $(this.element).val());
    //   this.handleChangeFromNativeSelect();
    // });
    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(sub => sub.dispose());
  }

  refresh() {
    this.taskQueue.queueTask(() => {
      $(this.element).material_select('destroy');
      $(this.element).material_select();
    });
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
      $(this.element).material_select();
    }
  }
}
