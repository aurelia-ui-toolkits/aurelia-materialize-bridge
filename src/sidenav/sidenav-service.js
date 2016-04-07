import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { getLogger } from 'aurelia-logging';

@inject(EventAggregator)
export class MdSidenavService {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.log = getLogger('MdSidenavService');
  }

  onSidenavVisible(options) {
    this.log.debug('onSidenavVisible', options);
  }

  getSidenavOptions(sidenav) {
    return {
      edge: sidenav.mdEdge,
      sidenav,
      width: sidenav.mdWidth
    };
  }

  setFixed(sidenav) {
    this.eventAggregator.publish('sidenav:fixed', this.getSidenavOptions(sidenav));
  }

  setFloating(sidenav) {
    this.eventAggregator.publish('sidenav:floating', this.getSidenavOptions(sidenav));
  }

  setHidden(sidenav) {
    this.eventAggregator.publish('sidenav:hidden', this.getSidenavOptions(sidenav));
  }

  setVisible(sidenav) {
    this.eventAggregator.publish('sidenav:visible', this.getSidenavOptions(sidenav));
  }
}
