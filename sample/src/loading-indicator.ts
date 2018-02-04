import { noView } from "aurelia-templating";
import { autoinject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";
import * as nprogress from "nprogress";

@noView
@autoinject
export class LoadingIndicator {
	constructor(private eventAggregator: EventAggregator) {
		eventAggregator.subscribe("router:navigation:processing", this.start);
		eventAggregator.subscribe("router:navigation:complete", this.done);
	}

	start() {
		nprogress.start();
		nprogress.inc();
	}

	done() {
		nprogress.done();
	}
}
