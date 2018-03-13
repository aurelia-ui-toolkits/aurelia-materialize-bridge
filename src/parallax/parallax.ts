import { customAttribute } from "aurelia-templating";
import { autoinject } from "aurelia-dependency-injection";

@customAttribute("md-parallax")
@autoinject
export class MdParallax {
	constructor(private element: Element) { }

	attached() {
		$(this.element).parallax();
	}

	detached() {
		// destroy handler not available
	}
}
