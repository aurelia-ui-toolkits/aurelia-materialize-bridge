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

  constructor(element, logManager, bindingEngine, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.bindingEngine = bindingEngine;
    this.valueObserver = this.bindingEngine.propertyObserver(this.element, 'value');
  }
  attached() {
    this.valueObserver.subscribe(this.handleChangeFromViewModel);
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
    this.valueObserver.unsubscribe();
  }

  refresh() {
    this.taskQueue.queueTask(() => {
      $(this.element).material_select('destroy');
      $(this.element).material_select();
    });
  }

  handleChangeFromNativeSelect() {
    // Aurelia's select observer doesn't get noticed when something changes the
    // select value directly (this.element.value = "something"). So we trigger
    // the change here.
    // this.valueObserver.value = $(this.element).val();
    // this.valueObserver.synchronizeValue();
    // this.valueObserver.synchronizeOptions();
    // this._suspendUpdate = true;
    // this.valueObserver.notify();
    // this._suspendUpdate = false;

    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this.log.debug('this.valueObserver.value', this.valueObserver.value);
      // this.valueObserver.value = $(this.element).val();
      // this.valueObserver.notify();

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
