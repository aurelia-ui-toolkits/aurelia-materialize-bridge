import { bindable, customElement, inject } from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';

@customElement('md-navbar')
@inject(Element)
export class MdNavbar {
  @bindable() fixed;
  fixedAttributeManager;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.fixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
  }

  detached() {
    if (getBooleanFromAttributeValue(this.fixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
  }
}
