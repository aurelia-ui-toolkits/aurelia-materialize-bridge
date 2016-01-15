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
  }
  attached() {
    this.element.classList.add('waves-effect');
    Waves.attach(this.element);
  }

  detached() {
    Waves.calm(this.element);
    this.element.classList.remove('waves-effect');
  }
}
