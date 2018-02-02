import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { NavigationInstruction, Router } from "aurelia-router";

// taken from: https://github.com/heruan/aurelia-breadcrumbs

@customElement("md-breadcrumbs")
@autoinject
export class MdBreadcrumbs {
	constructor(private element: Element, private aureliaRouter: Router) { }

	@bindable
	router: Router;

	childRouter: Router;

	bind() {
		if (!this.router) {
			this.router = this.aureliaRouter;
		}
		this.childRouter = this.router;
		let router = this.router;
		while (router.parent) {
			router = router.parent;
		}
		this.router = router;
	}

	navigate(navigationInstruction: NavigationInstruction) {
		this.childRouter.navigateToRoute(navigationInstruction.config.name);
	}
}
