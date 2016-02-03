import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-carousel')
@inject(Element)
export class MdCarousel {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdSlider = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    $(this.element).carousel();
  }
}
