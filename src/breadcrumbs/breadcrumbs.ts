import * as au from "../aurelia";

// taken from: https://github.com/heruan/aurelia-breadcrumbs

@au.customElement("md-breadcrumbs")
@au.autoinject
export class MdBreadcrumbs {
	constructor(private element: Element, private aureliaRouter: au.Router) { }

	@au.bindable
	router: au.Router;

	childRouter: au.Router;

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

	navigate(navigationInstruction: au.NavigationInstruction) {
		this.childRouter.navigateToRoute(navigationInstruction.config.name);
	}
}
