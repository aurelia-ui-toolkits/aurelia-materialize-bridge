import { MdCollapsible } from "aurelia-materialize-bridge";

export class App {
	collapsible: MdCollapsible;

	openFirst() {
		this.collapsible.open();
	}
}
