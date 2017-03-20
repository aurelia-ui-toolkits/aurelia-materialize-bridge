import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-radio')
@inject(Element)
export class MdRadio {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled = false;
  @bindable() mdReadonly = false;
  @bindable() mdGap = false;
  @bindable() mdModel;
  @bindable() mdName = '';
  @bindable() mdValue = '';

  constructor(element) {
    this.element = element;
    this.controlId = `md-radio-${MdRadio.id++}`;
    // this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    // this.radio.checked = getBooleanFromAttributeValue(this.mdChecked);
    // this.radio.addEventListener('change', this.handleChange);
  }

  detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
    // this.radio.removeEventListener('change', this.handleChange);
  }

  // handleChange() {
  //   this.mdChecked = this.radio.checked;
  // }

  // mdCheckedChanged(newValue) {
  //   if (this.radio) {
  //     this.radio.checked = !!newValue;
  //   }
  // }

  mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  }
}
