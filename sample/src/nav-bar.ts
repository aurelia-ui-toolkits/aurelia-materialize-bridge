import { bindable } from "aurelia-framework";
import { Router } from "aurelia-router";

export class NavBar {
	@bindable
	router: Router = null;

	attached() {
		$(".button-collapse").sideNav();
	}
}
