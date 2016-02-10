import { bindable, customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-slide')
@inject(Element)
@inlineView(`
  <template>
  <li>
    <img src.bind="img" />
    <div class="caption" ref="caption">
      <content></content>
    </div>
  </li>
  </template>
`)
export class MdSlide {
  @bindable() captionAlign = 'left';
  @bindable() img;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.captionAlign) {
      let align = `${this.captionAlign}-align`;
      this.caption.classList.add(align);
    }
  }

  detached() {
    if (this.captionAlign) {
      let align = `${this.captionAlign}-align`;
      this.caption.classList.remove(align);
    }
  }
}
