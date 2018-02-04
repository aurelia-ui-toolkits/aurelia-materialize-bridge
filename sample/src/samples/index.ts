import { autoinject } from "aurelia-dependency-injection";
import { ComponentService } from "../shared/component-service";
import { Router, RouterConfiguration } from "aurelia-router";

@autoinject
export class Index {
	constructor(private componentService: ComponentService) { }

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes = this.componentService.getRouterConfig();
		config.map(routes);
		this.router = router;
	}
}
