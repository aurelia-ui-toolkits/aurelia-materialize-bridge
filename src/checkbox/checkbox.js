import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
// import {fireEvent} from '../common/events';

@customElement('md-checkbox')
@inject(Element)
export class MdCheckbox {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdReadonly = false;
  @bindable() mdFilledIn;
  @bindable() mdMatcher;
  @bindable() mdModel;

  constructor(element) {
    this.element = element;
    this.controlId = `md-checkbox-${MdCheckbox.id++}`;
    // this.handleChange = this.handleChange.bind(this);
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
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    // this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    // this.checkbox.addEventListener('change', this.handleChange);
  }

  // blur() {
  //   fireEvent(this.element, 'blur');
  // }

  detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    // this.checkbox.removeEventListener('change', this.handleChange);
  }

  // handleChange() {
  //   this.mdChecked = this.checkbox.checked;
  //   fireEvent(this.element, 'blur');
  // }

  // mdCheckedChanged(newValue) {
  //   // if (this.checkbox) {
  //   //   this.checkbox.checked = !!newValue;
  //   // }
  //   fireEvent(this.element, 'blur');
  // }

  mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  }
}
