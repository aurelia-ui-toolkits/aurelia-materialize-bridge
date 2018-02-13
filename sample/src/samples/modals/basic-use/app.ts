import { autoinject } from "aurelia-framework";
import { MdToastService, MdModal } from "aurelia-materialize-bridge";

@autoinject
export class BasicUse {
	constructor(private toast: MdToastService) { }

	modal: MdModal;

	agree(e) {
		this.toast.show("You agreed!", 4000);
	}

	disagree(e) {
		this.toast.show("You disagreed!", 4000);
	}

	openModal() {
		this.modal.open();
	}
}
