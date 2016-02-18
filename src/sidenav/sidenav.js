import { bindable, customElement } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import { getLogger } from 'aurelia-logging';
import { MdSidenavService } from './sidenav-service';

@customElement('md-sidenav')
@inject(Element, EventAggregator, MdSidenavService)
export class MdSidenav {
  static id = 0;
  @bindable() mdCloseOnClick = false;
  @bindable() mdEdge = 'left';
  @bindable() mdFixed = false;
  @bindable() mdWidth = 250;

  attachedResolver;
  whenAttached;

  constructor(element, eventAggregator, sidenavService) {
    this.element = element;
    this.eventAggregator = eventAggregator;
    this.sidenavService = sidenavService;
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
      if (newValue) {
        this.attributeManager.addClasses('fixed');
        this.sidenavService.setFixed(this);
      } else {
        this.attributeManager.removeClasses('fixed');
        this.sidenavService.setFloating(this);
        // $(this.element).sideNav('hide');
        // let factor = (this.edge === 'right' ? 1 : -1);
        // $(this.sidenav).css({ 'transform': `translateX(${factor * this.mdWidth}px)` });
      }
    }
  }
}
