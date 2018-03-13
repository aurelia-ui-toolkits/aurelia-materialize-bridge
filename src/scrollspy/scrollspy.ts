import { bindable, customAttribute, autoinject } from "aurelia-framework";

@customAttribute("md-scrollspy")
@autoinject
export class MdScrollSpy {
	constructor(private element: Element) { }

	@bindable
	target: string;

	attached() {
		$(this.target, this.element).scrollSpy();
	}

	detached() {
		// destroy handler not available
	}
}
