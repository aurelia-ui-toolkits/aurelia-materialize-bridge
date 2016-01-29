import { bindable, bindingMode, inject, customAttribute, LogManager } from 'aurelia-framework';

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

  selectedChanged() {
    // this.element.value = this.selected;
    $(this.element).val(this.selected);
    $(this.element).material_select();
  }
}
