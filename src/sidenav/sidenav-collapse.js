import { bindable, customAttribute } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { getLogger } from 'aurelia-logging';

@customAttribute('md-sidenav-collapse')
@inject(Element, ObserverLocator, EventAggregator)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element, observerLocator, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
    this.observerLocator = observerLocator;
    this.log = getLogger('md-sidenav-collapse');

    let self = this;
    this.eventAggregator.subscribe('sidenav:floating', options => {
      if (options.sidenav.controlId === self.ref.controlId) {
        self.log.debug('ea set floating');
        $(self.element).sideNav('show');
      }
    });
    this.eventAggregator.subscribe('sidenav:fixed', options => {
      if (options.sidenav.controlId === self.ref.controlId) {
        self.log.debug('ea set fixed');
        $(self.element).sideNav('hide');
        window.setTimeout(() => {
          $('#' + self.ref.controlId).css('transform', 'translateX(0%)')
        }, 310);
      }
    });
  }

  attached() {
    this.ref.whenAttached.then((sidenav) => {
      sidenav._collapse = this;
      // this.widthSubscription = this.observerLocator.getObserver(this.ref, 'mdWidth').subscribe(this.widthChanged.bind(this));
      // this.fixedSubscription = this.observerLocator.getObserver(this.ref, 'mdFixed').subscribe(this.fixedChanged.bind(this));

      this.element.setAttribute('data-activates', this.ref.controlId);
      let sideNavConfig = {
        edge: this.ref.mdEdge || 'left',
        closeOnClick: (this.ref.mdFixed ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick)),
        menuWidth: parseInt(this.ref.mdWidth, 10)
      };
      // this.log.debug('sideNavConfig:', sideNavConfig);
      $(this.element).sideNav(sideNavConfig);
    });
  }

  detached() {
    // this.widthSubscription.unsubscribe();
  }

  // fixedChanged(newValue) {
  //   if (newValue) {
  //     let $clone = $(this.ref.sidenav).clone();
  //     $(this.ref.sidenav).remove();
  //     $('#sidenav-overlay').remove();
  //     this.ref.sidenav = $clone;
  //   }
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
