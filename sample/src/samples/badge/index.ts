import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { Subscription, EventAggregator } from "aurelia-event-aggregator";

@autoinject
export class Index {
	constructor(private eventAggregator: EventAggregator) {
		this.subscription = this.eventAggregator.subscribe("router:navigation:complete", e => this.navigationComplete(e));
	}
	subscription: Subscription;

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			{ name: "basic-use", route: ["", "basic-use"], moduleId: "./basic-use/app", nav: true, title: "Basic use" },
			{ name: "in-dropdown", route: "in-dropdown", moduleId: "./in-dropdown/app", nav: true, title: "In dropdown" },
		];
		config.map(routes);
		this.router = router;
	}

	navigationComplete(e) {
		// tslint:disable-next-line:no-console
		console.log(e);
	}

	detached() {
		if (this.subscription) {
			this.subscription.dispose();
		}
	}
}
