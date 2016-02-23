import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@customElement('md-range')
@inject(Element)
export class MdRange {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMin = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMax = 100;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdStep = 1;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = 0;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-range');
  }

  attached() {
    // this.mdMin = parseFloat(this.mdMin, 10);
    // this.mdMax = parseFloat(this.mdMax, 10);
    // this.mdStep = parseFloat(this.mdStep, 10);

    // causes an infinite loop when min/max are floats
    // this.mdValue = parseFloat(this.mdValue, 10);
  }

  // mdValueChanged(newValue) {
  //   this.mdValue = parseFloat(newValue, 10);
  //   this.log.debug('mdValueChanged', newValue);
  // }
}
