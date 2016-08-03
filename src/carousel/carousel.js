import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-carousel')
@inject(Element)
export class MdCarousel {
  @bindable() mdIndicators = true;
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

    let options = {
      full_width: getBooleanFromAttributeValue(this.mdSlider),
      indicators: this.mdIndicators
    };

    // workaround for: https://github.com/Dogfalo/materialize/issues/2741
    // if (getBooleanFromAttributeValue(this.mdSlider)) {
    //   $(this.element).carousel({full_width: true});
    // } else {
    //   $(this.element).carousel();
    // }
    $(this.element).carousel(options);
  }
}
