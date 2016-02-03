import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import * as LogManager from 'aurelia-logging';

@inject(Element, LogManager)
@customAttribute('md-select')
export class MdSelect {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) selected;
  constructor(element, logManager) {
    this.element = element;
    this.changeHandler = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    // this.log = getLogger('md-select');
  }
  attached() {
    $(this.element).material_select();
    $(this.element).on('change', this.changeHandler);
  }

  detached() {
    $(this.element).off('change', this.changeHandler);
    $(this.element).material_select('destroy');
  }

  /*
   * This handler is called when the native <select> changes.
   */
  handleChangeFromNativeSelect() {
    // this.selected = this.element.value;
    this.selected = $(this.element).val();
  }

  arraysAreEqual(array1, array2) {
    let result = true;
    if (array1 && array2) {
      if (typeof array1 === 'string') {
        // single select
        result = false;
      } else {
        result = (array1.length === array2.length) && array1.every(function(element, index) {
          return element === array2[index];
        });
      }
    } else {
      result = false;
    }

    return result;
  }

  selectedChanged() {
    // this.element.value = this.selected;
    if (!this.arraysAreEqual($(this.element).val(), this.selected)) {
      $(this.element).val(this.selected);
      $(this.element).material_select();
    }
  }
}
