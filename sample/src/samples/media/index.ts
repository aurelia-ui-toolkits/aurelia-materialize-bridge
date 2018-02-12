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
			{ route: "", redirect: "box-basic" },
			super.getRouteConfig("box-basic"),
			super.getRouteConfig("box-caption"),
			super.getRouteConfig("slider-basic"),
			super.getRouteConfig("slider-fullscreen"),
			super.getRouteConfig("slider-api"),
			super.getRouteConfig("slider-options"),
			super.getRouteConfig("carousel-basic"),
			super.getRouteConfig("carousel-slider"),
			super.getRouteConfig("carousel-special"),
		];
		config.map(routes);
		this.router = router;
	}
}
