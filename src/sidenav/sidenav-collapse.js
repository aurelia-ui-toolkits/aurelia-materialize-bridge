import { bindable, customAttribute } from 'aurelia-templating';
import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@customAttribute('md-sidenav-collapse')
@inject(Element, ObserverLocator)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element, observerLocator) {
    this.element = element;
    this.observerLocator = observerLocator;
    this.log = getLogger('md-sidenav-collapse');
    this.log.debug('ctor');
  }

  attached() {
    this.log.debug('attached');
    this.ref.whenAttached.then(() => {
      // this.widthSubscription = this.observerLocator.getObserver(this.ref, 'mdWidth').subscribe(this.widthChanged.bind(this));
      // this.fixedSubscription = this.observerLocator.getObserver(this.ref, 'fixed').subscribe(this.fixedChanged.bind(this));

      this.element.setAttribute('data-activates', this.ref.controlId);
      let sideNavConfig = {
        edge: this.ref.mdEdge || 'left',
        closeOnClick: this.ref.mdCloseOnClick,
        menuWidth: parseInt(this.ref.mdWidth, 10)
      };
      // this.log.debug('sideNavConfig:', sideNavConfig);
      $(this.element).sideNav(sideNavConfig);
    });
  }

  detached() {
    // this.widthSubscription.unsubscribe();
  }

  // fixedChanged() {
  //   this.log.debug('fixedChanged');
  //   $(this.element).sideNav({
  //     edge: this.ref.edge || 'left',
  //     closeOnClick: this.ref.closeOnClick,
  //     menuWidth: parseInt(this.ref.mdWidth, 10)
  //   });
  // }
  //
  // widthChanged() {
  //   this.log.debug('widthChanged');
  //   $(this.element).sideNav({
  //     edge: this.ref.edge || 'left',
  //     closeOnClick: this.ref.closeOnClick,
  //     menuWidth: parseInt(this.ref.mdWidth, 10)
  //   });
  // }
}
