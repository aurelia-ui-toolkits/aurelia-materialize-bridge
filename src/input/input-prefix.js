import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-prefix')
@inject(Element)
export class MdPrefix {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.attributeManager.addClasses('prefix');
  }

  unbind() {
    this.attributeManager.removeClasses('prefix');
  }
}
