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

	attached() {
		this.element.addEventListener("click", this.click);
	}

	detached(){
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
