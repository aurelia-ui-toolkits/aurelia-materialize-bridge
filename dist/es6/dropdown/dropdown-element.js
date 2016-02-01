import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-dropdown')
@inject(Element)
export class MdDropdownElement {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) alignment = 'left';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) belowOrigin = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) constrainWidth = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) gutter = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) hover = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) inDuration = 300;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) outDuration = 225;

  constructor(element) {
    this.element = element;
    this.controlId = `md-dropdown-${MdDropdown.id++}`;
  }
  attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  }
}
