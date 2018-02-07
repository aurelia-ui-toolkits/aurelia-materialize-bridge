import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { SampleIndexBase } from "../sample-index-base";

@useView("../sample-template.html")
@autoinject
export class Index extends SampleIndexBase {
	constructor(eventAggregator: EventAggregator, loader: Loader, taskQueue: TaskQueue) {
		super(eventAggregator, loader, taskQueue);
	}

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			// { route: "", redirect: "basic-use" },
			{ name: "basic-use", route: ["", "basic-use"], moduleId: "./basic-use/app", nav: true, title: "Basic use" },
			{ name: "fab", route: "fab", moduleId: "./fab/app", nav: true, title: "Fab" },
		];
		config.map(routes);
		this.router = router;
	}
}
