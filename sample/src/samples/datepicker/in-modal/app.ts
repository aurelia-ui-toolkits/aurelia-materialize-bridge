import { autoinject } from "aurelia-framework";
import { MdToastService, MdModal } from "aurelia-materialize-bridge";

@autoinject
export class App {
	selectedDate = null;
	modal: MdModal;

	constructor(private toast: MdToastService) {
	}

	agree(e) {
		this.toast.show("You agreed!", 4000);
	}

	disagree(e) {
		this.toast.show("You disagreed!", 4000);
	}

	openModal() {
		this.modal.open();
	}

	setDate() {
		let date = new Date();
		this.selectedDate = date;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
