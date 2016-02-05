import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode, ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import * as LogManager from 'aurelia-logging';

@inject(Element, LogManager, ObserverLocator)
@customAttribute('md-select')
export class MdSelect {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) selected;
  constructor(element, logManager, observerLocator) {
    this.element = element;
    this.handleChangeFromAurelia = this.handleChangeFromAurelia.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.observerLocator = observerLocator;
    this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
  }
  attached() {
    this.valueObserver.subscribe(this.handleChangeFromAurelia);
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
    this.valueObserver.synchronizeValue();
    this.valueObserver.notify();
  }

  handleChangeFromAurelia(newValue) {
    // this.selected = this.element.value;
    // this.selected = $(this.element).val();
    this.log.debug('handleChangeFromAurelia', newValue);
    this.selected = newValue;
    $(this.element).material_select();
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
