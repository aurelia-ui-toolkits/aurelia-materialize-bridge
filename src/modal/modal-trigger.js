import { customAttribute, inject } from 'aurelia-templating';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-modal-trigger')
@inject(Element)
export class MdModalTrigger {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('modal-trigger');
  }

  detached() {
    this.attributeManager.removeClasses('modal-trigger');
  }
}
