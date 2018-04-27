import * as au from "../aurelia";

@au.customAttribute("md-fadein-image")
@au.autoinject
export class MdFadeinImage {
	constructor(private element: Element) {
		this.fadeInImage = this.fadeInImage.bind(this);
		this.log = au.getLogger("md-fadein-image");
	}

	log: au.Logger;

	@au.bindable
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
