import { customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-slider')
@inject(Element)
@inlineView(`
  <template class="slider">
  <require from="./slider.css"></require>
  <ul class="slides">
    <content select="li"></content>
  </ul>
  </template>
`)
export class MdSlider {
  constructor(element) {
    this.element = element;
  }

  attached() {
    // $(this.element).slider({full_width: true});
    $(this.element).slider();
  }
}
