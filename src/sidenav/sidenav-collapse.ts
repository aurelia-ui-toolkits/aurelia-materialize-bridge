import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { MdSidenav } from "./sidenav";

@customAttribute("md-sidenav-collapse")
@autoinject
export class MdSidenavCollapse {
	constructor(private element: Element) {
		this.element = element;
	}

	@bindable
	ref: MdSidenav;

	isOpen: boolean;

	async attached() {
		this.element.addEventListener("click", () => this.click());
	}

	click() {
		if (this.isOpen) {
			this.ref.close();
			this.isOpen = false;
		}
		else {
			this.ref.open();
			this.isOpen = true;
		}
	}
}
