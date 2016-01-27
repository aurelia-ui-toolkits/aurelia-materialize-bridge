import { bindable, bindingMode, inject, customAttribute } from 'aurelia-framework';

@inject(Element)
@customAttribute('md-select')
export class MdSelect {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) selected;
  constructor(element) {
    this.element = element;
    this.changeHandler = this.syncValue.bind(this);
  }
  attached() {
    $(this.element).material_select();
    $(this.element).on('change', this.changeHandler);
  }

  detached() {
    $(this.element).off('change', this.changeHandler);
    $(this.element).material_select('destroy');
  }

  syncValue() {
    this.selected = this.element.value;
  }

  selectedChanged() {
    this.element.value = this.selected;
    $(this.element).material_select();
  }
}
