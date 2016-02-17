import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { bindingMode } from 'aurelia-binding';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdImage = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdReveal = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
  }
}
