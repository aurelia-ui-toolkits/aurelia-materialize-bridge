import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { SampleIndexBase } from "../sample-index-base";
import { HttpClient } from "aurelia-fetch-client";

@useView("../sample-template.html")
@autoinject
export class Index extends SampleIndexBase {
	constructor(eventAggregator: EventAggregator, loader: Loader, taskQueue: TaskQueue, http: HttpClient) {
		super(eventAggregator, loader, taskQueue, http);
	}

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			{ route: "", redirect: "basic-use" },
			super.getRouteConfig("basic-use"),
			super.getRouteConfig("multiple"),
			super.getRouteConfig("binding-to-objects"),
			super.getRouteConfig("refresh"),
			super.getRouteConfig("validation"),
			super.getRouteConfig("filtered-repeat"),
			super.getRouteConfig("open-trigger"),
		];
		config.map(routes);
		this.router = router;
	}
}
