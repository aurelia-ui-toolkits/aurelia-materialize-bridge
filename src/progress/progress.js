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

  bind() {
    // This disables property changed callbacks for any bindable properties during initialization
    // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
  }

  attached() {
    this.mdPixelSizeChanged(this.mdPixelSize);
  }

  mdSizeChanged(newValue) {
    this.mdPixelSize = null;
  }

  mdPixelSizeChanged(newValue) {
    if (this.wrapper) {
      newValue = (newValue === null || newValue === '' || isNaN(newValue)) ? '' : `${newValue}px`;
      this.wrapper.style.height = newValue;
      this.wrapper.style.width = newValue;
    }
  }
}
