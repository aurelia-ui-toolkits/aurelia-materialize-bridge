import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { Logger, getLogger } from "aurelia-logging";

@customAttribute("md-staggered-list")
@autoinject
export class MdStaggeredList {
	constructor(private element: Element) {
		this.staggerList = this.staggerList.bind(this);
		this.log = getLogger("md-staggered-list");
	}

	log: Logger;

	@bindable
	ref: HTMLElement;

	attached() {
		this.element.addEventListener("click", this.staggerList);
		this.ensureOpacity();
	}

	detached() {
		this.element.removeEventListener("click", this.staggerList);
	}

	staggerList() {
		Materialize.showStaggeredList($(this.ref));
	}

	ensureOpacity() {
		let items = this.ref.querySelectorAll("li");
		[].forEach.call(items, item => {
			let opacity = window.getComputedStyle(item).opacity;
			if (opacity !== "0") {
				item.style.opacity = 0;
			}
		});
	}
}
