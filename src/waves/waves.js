import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';

@customAttribute('md-waves')
@bindable({
  name: 'color',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class MdWaves {
  constructor(element) {
    this.element = element;
    this.keepWavesCssClasses = false;
  }

  attached() {
    if (this.element.classList.contains('waves-effect')) {
      this.keepWavesCssClasses = true;
    } else {
      this.element.classList.add('waves-effect');
    }
    if (this.color && !this.element.classList.contains('waves-' + this.color)) {
      this.element.classList.add('waves-' + this.color);
    }
    // this.toggleCssClasses(true);
    Waves.attach(this.element);
  }

  detached() {
    // throws "Waves.calm is not a function" - not sure why, the api says it should be there
    // Waves.calm(this.element);
    if (!this.keepWavesCssClasses) {
      this.element.classList.remove('waves-effect');
    }
    if (this.color && this.element.classList.contains('waves-' + this.color)) {
      this.element.classList.remove('waves-' + this.color);
    }
  }
}
