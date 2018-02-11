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
			{ route: "", redirect: "toast" },
			super.getRouteConfig("toast"),
			super.getRouteConfig("tooltip"),
			super.getRouteConfig("tooltip-html"),
		];
		config.map(routes);
		this.router = router;
	}
}
