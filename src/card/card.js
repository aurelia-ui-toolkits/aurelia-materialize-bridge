import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { bindingMode } from 'aurelia-binding';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdHorizontal;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdImage = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdReveal = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdAction = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdStickyAction = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdSize = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
    this.mdAction = getBooleanFromAttributeValue(this.mdAction);
    this.mdStickyAction = getBooleanFromAttributeValue(this.mdStickyAction);
  }
}
