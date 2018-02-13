import { MdSidenavCollapse } from "aurelia-materialize-bridge";

export class App {
	sidenavController: MdSidenavCollapse;

	openSideNav() {
		this.sidenavController.show();
	}
}
