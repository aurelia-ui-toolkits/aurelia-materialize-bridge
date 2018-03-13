import { bindable, customAttribute, bindingMode, autoinject } from "aurelia-framework";

@customAttribute("md-pushpin")
@autoinject
export class MdPushpin {
	constructor(private element: Element) { }

	@bindable
	bottom: number | string = Infinity;

	@bindable
	offset: number | string = 0;

	@bindable
	top: number | string = 0;

	attached() {
		$(this.element).pushpin({
			bottom: (this.bottom === Infinity ? Infinity : parseInt(this.bottom.toString(), 10)),
			offset: parseInt(this.offset.toString(), 10),
			top: parseInt(this.top.toString(), 10)
		});
	}

	detached() {
		// destroy handler not available
	}
}
