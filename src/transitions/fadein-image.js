import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import 'materialize';

@customAttribute('md-fadein-image')
@inject(Element)
export class MdFadeinImage {
  @bindable() ref;

  constructor(element) {
    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
  }

  attached() {
    this.element.addEventListener('click', this.fadeInImage);
  }

  detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  }

  fadeInImage() {
    Materialize.fadeInImage(this.ref);
  }
}
