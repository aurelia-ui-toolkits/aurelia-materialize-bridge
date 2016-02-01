import { bindable, customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

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
  @bindable() mdFillContainer = false;
  @bindable() mdHeight = 400;
  @bindable() mdIndicators = true;
  @bindable() mdInterval = 6000;
  @bindable() mdTransition = 500;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    // $(this.element).slider({full_width: true});
    $(this.element).slider({
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    });
  }

  pause() {
    $(this.element).slider('pause');
  }

  start() {
    $(this.element).slider('start');
  }

  next() {
    $(this.element).slider('next');
  }

  prev() {
    $(this.element).slider('prev');
  }
}
