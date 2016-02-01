import { bindable, customAttribute } from 'aurelia-templating';
import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('md-sidenav-collapse')
@inject(Element, ObserverLocator)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element, observerLocator) {
    this.element = element;
    this.observerLocator = observerLocator;
  }

  attached() {
    // this.widthSubscription = this.observerLocator.getObserver(this.ref, 'mdWidth')
    //   .subscribe(this.widthChanged.bind(this));
    this.element.setAttribute('data-activates', this.ref.controlId);
    $(this.element).sideNav({
      edge: this.ref.edge || 'left',
      closeOnClick: this.ref.closeOnClick,
      menuWidth: parseInt(this.ref.mdWidth, 10)
    });
  }

  detached() {
    // this.widthSubscription.unsubscribe();
  }

  widthChanged() {
    $(this.element).sideNav({
      edge: this.ref.edge || 'left',
      closeOnClick: this.ref.closeOnClick,
      menuWidth: parseInt(this.ref.mdWidth, 10)
    });
  }
}
