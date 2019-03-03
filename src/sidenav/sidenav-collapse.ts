import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { MdSidenav } from "./sidenav";

@customAttribute("md-sidenav-collapse")
@autoinject
export class MdSidenavCollapse {
	constructor(private element: Element) { }

	@bindable
	ref: MdSidenav;

	attached() {
		this.element.addEventListener("click", this.click);
		if (this.ref) {
			this.element.setAttribute("data-target", this.ref.controlId);
		}
	}

	detached() {
		this.element.removeEventListener("click", this.click);
	}

	click = () => {
		if (this.ref.instance.isOpen) {
			this.ref.close();
		}
		else {
			this.ref.open();
		}
	}
}
