import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { getLogger } from 'aurelia-logging';

@inject(EventAggregator)
export class MdSidenavService {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.eventAggregator.subscribe('sidenav:visible', this.onSidenavVisible.bind(this));
    this.log = getLogger('MdSidenavService');
  }

  onSidenavVisible(options) {
    this.log.debug('onSidenavVisible', options);
  }
}
