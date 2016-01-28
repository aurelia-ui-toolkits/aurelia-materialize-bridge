import { bindable, customElement, inject } from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';

@customElement('md-sidenav')
@inject(Element)
export class MdSidenav {
  static id = 0;
  @bindable() closeOnClick = true;
  @bindable() edge = 'left';
  @bindable() fixed = false;

  constructor(element) {
    this.element = element;
    this.controlId = `md-sidenav-${MdSidenav.id++}`;
  }

  attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.fixed)) {
      this.attributeManager.addClasses('fixed');
    }
  }

  detached() {
    this.attributeManager.removeClasses('fixed');
  }

  fixedChanged(newValue) {
    if (this.attributeManager) {
      if (newValue) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  }
}
