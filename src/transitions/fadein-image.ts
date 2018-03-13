import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { getLogger, Logger } from "aurelia-logging";

@customAttribute("md-fadein-image")
@autoinject
export class MdFadeinImage {
	constructor(private element: Element) {
		this.fadeInImage = this.fadeInImage.bind(this);
		this.log = getLogger("md-fadein-image");
	}

	log: Logger;

	@bindable
	ref: HTMLElement;

	attached() {
		this.element.addEventListener("click", this.fadeInImage);
		this.ensureOpacity();
	}

	detached() {
		this.element.removeEventListener("click", this.fadeInImage);
	}

	fadeInImage() {
		Materialize.fadeInImage($(this.ref));
	}

	ensureOpacity() {
		let opacity = window.getComputedStyle(this.ref).opacity;
		if (opacity !== "0") {
			this.ref.style.opacity = "0";
		}
	}
}
