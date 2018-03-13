import { bindable, customElement, autoinject } from "aurelia-framework";
import { getLogger, Logger } from "aurelia-logging";

@customElement("md-tap-target")
@autoinject
export class MdTapTarget {
	constructor(private element: Element) {
		this.log = getLogger("md-tap-target");
	}

	static controlId = 0;
	log: Logger;

	@bindable
	mdRef: HTMLElement = null;

	bind() {
		if (!this.mdRef) {
			throw new Error("md-tap-target needs a referenced element");
		} else {
			let id = this.mdRef.getAttribute("id");
			if (!id) {
				id = `md-tap-target-${MdTapTarget.controlId++}`;
				this.mdRef.setAttribute("id", id);
			}
			this.element.setAttribute("data-activates", id);
		}
	}

	open() {
		$(this.element).tapTarget("open");
	}

	close() {
		$(this.element).tapTarget("close");
	}
}
