import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-footer')
@inject(Element)
export class MdFooter {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.attributeManager.addClasses('page-footer');
  }

  unbind() {
    this.attributeManager.removeClasses('page-footer');
  }
}
