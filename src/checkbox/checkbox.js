import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';

@customElement('md-checkbox')
@inject(Element)
export class MdCheckbox {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdFilledIn;

  constructor(element) {
    this.element = element;
    this.controlId = MdCheckbox.id++;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
  }
}
