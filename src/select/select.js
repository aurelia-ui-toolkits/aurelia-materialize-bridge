import { customAttribute } from 'aurelia-templating';
import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import * as LogManager from 'aurelia-logging';

@inject(Element, LogManager, ObserverLocator)
@customAttribute('md-select')
export class MdSelect {
  _suspendUpdate = false;

  constructor(element, logManager, observerLocator) {
    this.element = element;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.observerLocator = observerLocator;
    this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
  }
  attached() {
    this.valueObserver.subscribe(this.handleChangeFromViewModel);
    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.valueObserver.unsubscribe();
  }

  handleChangeFromNativeSelect() {
    this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
    // Aurelia's select observer doesn't get noticed when something changes the
    // select value directly (this.element.value = "something"). So we trigger
    // the change here.
    this.valueObserver.value = $(this.element).val();
    this.valueObserver.synchronizeValue();
    this.valueObserver.synchronizeOptions();
    this._suspendUpdate = true;
    this.valueObserver.notify();
    this._suspendUpdate = false;
  }

  handleChangeFromViewModel(newValue) {
    // this.selected = this.element.value;
    // this.selected = $(this.element).val();
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      $(this.element).material_select();
    }
  }

  // arraysAreEqual(array1, array2) {
  //   let result = true;
  //   if (array1 && array2) {
  //     if (typeof array1 === 'string') {
  //       // single select
  //       result = false;
  //     } else {
  //       result = (array1.length === array2.length) && array1.every(function(element, index) {
  //         return element === array2[index];
  //       });
  //     }
  //   } else {
  //     result = false;
  //   }
  //
  //   return result;
  // }

  // selectedChanged() {
  //   this.element.value = this.selected;
  //   // if (!this.arraysAreEqual($(this.element).val(), this.selected)) {
  //   //   $(this.element).val(this.selected);
  //   //   $(this.element).material_select();
  //   // }
  // }
}
