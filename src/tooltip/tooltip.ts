import * as au from "../aurelia";

@au.customAttribute("md-tooltip")
@au.autoinject
export class MdTooltip {
	constructor(private element: Element) { }

	@au.bindable
	position: "top" | "right" | "bottom" | "left" = "bottom";

	@au.bindable
	delay: number = 50;

	@au.bindable
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
		if (this.text) {
			this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.text, position: this.position });
		}
		else if (this.instance) {
			this.instance.destroy();
		}
	}
}
