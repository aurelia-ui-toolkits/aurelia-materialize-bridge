import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-progress')
@inject(Element)
export class MdProgress {
  @bindable() mdColor = null;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdPixelSize = null;
  @bindable() mdSize = 'big';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdType = 'linear';
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = null;

  constructor(element) {
    this.element = element;
  }

  // mdValueChanged(newValue, oldValue) {
  //   console.log('mdValueChanged, newValue:', JSON.stringify(newValue), 'oldValue:', JSON.stringify(oldValue));
  // }

  mdSizeChanged(newValue) {
    this.mdPixelSize = null;
    if (this.wrapper) {
      this.wrapper.style.height = '';
      this.wrapper.style.width = '';
    }
  }

  mdPixelSizeChanged(newValue) {
    if (isNaN(newValue)) {
      this.mdPixelSize = null;
    } else {
      this.mdSize = '';
      if (this.wrapper) {
        this.wrapper.style.height = `${newValue}px`;
        this.wrapper.style.width = `${newValue}px`;
      }
    }
  }
}
