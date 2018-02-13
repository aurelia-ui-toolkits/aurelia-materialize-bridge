import { autoinject } from "aurelia-framework";
import { MdToastService, MdModal } from "aurelia-materialize-bridge";
import { Logger } from "../../../shared/logger";

@autoinject
export class Events {
	constructor(private toast: MdToastService) { }

	logger: Logger;
	modal: MdModal;

	agree(e) {
		this.toast.show("You agreed!", 4000);
	}

	disagree(e) {
		this.toast.show("You disagreed!", 4000);
	}

	onComplete(e) {
		this.logger.log("modal complete");
	}

	onReady(e) {
		this.logger.log("modal ready");
	}

	openModal() {
		this.modal.open();
	}
}
