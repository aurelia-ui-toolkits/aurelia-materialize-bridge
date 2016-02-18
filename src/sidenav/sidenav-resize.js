import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { getLogger } from 'aurelia-logging';

@customAttribute('md-sidenav-resize')
@inject(Element, EventAggregator)
export class MdSidenavResize {
  constructor(element, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
    this.log = getLogger('md-sidenav-resize');
  }

  attached() {
    this.eventAggregator.subscribe('sidenav:fixed', () => { this.log.debug('fixed'); });
    this.eventAggregator.subscribe('sidenav:floating', () => { this.log.debug('fixed'); });
    this.eventAggregator.subscribe('sidenav:visible', () => { this.log.debug('fixed'); });
    this.eventAggregator.subscribe('sidenav:hidden', () => { this.log.debug('fixed'); });
  }
}
