import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-char-counter')
@inject(Element)
export class MdCharCounter {
  @bindable() length = 120;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.length = parseInt(this.length, 10);

    // attach to input and textarea elements explicitly, so this counter can be 
    // used on containers (or custom elements like md-input)
    const tagName = this.element.tagName.toUpperCase();
    if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
      this.attributeManager.addAttributes({ 'data-length': this.length });
      $(this.element).characterCounter();
    } else {
      const elem = $(this.element).find('input,textarea');
      elem.each((i, el) => { $(el).attr('data-length', this.length); });
      elem.characterCounter();
    }
  }

  detached() {
    this.attributeManager.removeAttributes(['data-length']);
  }
}
