import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";

@autoinject
export class Index {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			{name: "badge", route: "badge", moduleId: "./badge/index", nav: true, title: "Badge" }
		];
		config.map(routes);
		this.router = router;
	}
}
