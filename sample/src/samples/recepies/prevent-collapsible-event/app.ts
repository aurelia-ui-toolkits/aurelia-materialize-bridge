import { autoinject } from "aurelia-framework";
import { MdToastService } from "aurelia-materialize-bridge";

@autoinject
export class App {
	constructor(private toast: MdToastService) { }

	editClicked() {
		this.toast.show("edit button clicked");
	}
}
