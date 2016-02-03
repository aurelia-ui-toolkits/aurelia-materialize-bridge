import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
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
