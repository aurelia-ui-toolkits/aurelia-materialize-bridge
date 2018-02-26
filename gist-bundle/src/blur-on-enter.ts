import { autoinject, customAttribute, inject } from "aurelia-framework";

@customAttribute("blur-on-enter")
@autoinject
export class BlurOnEnter {
	constructor(private element: Element) {
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	attached() {
		this.element.addEventListener("keyup", this.handleKeyUp);
	}

	detached() {
		this.element.removeEventListener("keyup", this.handleKeyUp);
	}

	handleKeyUp(e) {
		if (e.keyCode === 13) {
			(this.element as HTMLElement).blur();
		}
	}
}
