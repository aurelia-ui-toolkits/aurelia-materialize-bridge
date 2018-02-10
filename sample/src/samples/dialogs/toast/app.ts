import { autoinject } from "aurelia-framework";
import { MdToastService } from "aurelia-materialize-bridge";

@autoinject
export class App {
	constructor(private toast: MdToastService) {
		this.toast = toast;
	}

	showDefaultToast() {
		this.toast.show("I am a toast!", 4000);
	}

	showStyledToast() {
		this.toast.show("I've got style!", 4000, "rounded blue");
	}

	showToastWithPromise() {
		this.toast.show("When finished, I trigger another toast.", 2000).then(() => {
			this.toast.show("I am a toast called by a callback of another toast!", 2000);
		});
	}
}
