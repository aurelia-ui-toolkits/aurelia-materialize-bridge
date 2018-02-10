import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";

@autoinject
export class Index {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			this.getRouteConfig("badge"),
			this.getRouteConfig("button"),
			this.getRouteConfig("breadcrumbs"),
			this.getRouteConfig("card"),
			this.getRouteConfig("chip"),
		];
		config.map(routes);
		this.router = router;
	}

	getRouteConfig(name: string): RouteConfig {
		let title = name.replace(/-/g, " ");
		return { route: name, name, moduleId: `./${name}/index`, nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase() };
	}

}
