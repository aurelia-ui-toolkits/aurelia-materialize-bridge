import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

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
    this.controlId = `md-checkbox-${MdCheckbox.id++}`;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
  }

  mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  }
}
