import { noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import nprogress from 'nprogress';

@noView()
@inject(EventAggregator)
export class LoadingIndicator {
  constructor(eventAggregator) {
    eventAggregator.subscribe('router:navigation:processing', this.start);
    eventAggregator.subscribe('router:navigation:complete', this.done);
  }

  start() {
    nprogress.start();
    nprogress.inc();
  }

  done() {
    nprogress.done();
  }
}
