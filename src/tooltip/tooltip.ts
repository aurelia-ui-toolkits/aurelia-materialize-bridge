import { customAttribute, autoinject } from "aurelia-framework";
import { bindable } from "aurelia-typed-observable-plugin";

@customAttribute("md-tooltip")
@autoinject
export class MdTooltip {
	constructor(private element: Element) { }

	@bindable
	position: "top" | "right" | "bottom" | "left" = "bottom";

	@bindable
	delay: number = 50;

	@bindable
	text: string = "";
	textChanged() {
		this.initTooltip();
	}

	instance: M.Tooltip;

	attached() {
		this.initTooltip();
	}

	detached() {
		this.instance.destroy();
	}

	initTooltip() {
		this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.text, position: this.position });
	}
}
