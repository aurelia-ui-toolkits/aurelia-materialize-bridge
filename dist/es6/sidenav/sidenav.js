import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import { getLogger } from 'aurelia-logging';

@customElement('md-sidenav')
@inject(Element)
export class MdSidenav {
  static id = 0;
  @bindable() mdCloseOnClick = false;
  @bindable() mdEdge = 'left';
  @bindable() mdFixed = false;
  @bindable() mdWidth = 300;

  attachedResolver;
  whenAttached;

  constructor(element) {
    this.element = element;
    this.controlId = `md-sidenav-${MdSidenav.id++}`;
    this.log = getLogger('md-sidenav');
    this.whenAttached = new Promise((resolve, reject) => {
      this.attachedResolver = resolve;
    });
  }

  attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        // see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  }

  detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  }

  mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  }
}
