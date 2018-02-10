import { autoinject, bindable } from "aurelia-framework";
import { MdToastService } from "aurelia-materialize-bridge";

@autoinject
export class App {
	constructor(private toastService: MdToastService) {
		this.toastService = toastService;
	}

	collapsibleOpen(targetElement) {
		targetElement.openCount = (targetElement.openCount || 0) + 1;

		this.toastService.show("Open Callback Received!", 1000);
	}

	collapsibleClose(targetElement) {
		targetElement.closeCount = (targetElement.closeCount || 0) + 1;

		this.toastService.show("Close Callback Received!", 1000);
	}
}
