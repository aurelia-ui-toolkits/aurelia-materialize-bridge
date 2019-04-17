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
	html: string = "";
	textChanged() {
		this.initTooltip();
	}

	instance: M.Tooltip;

	attached() {
		this.initTooltip();
	}

	detached() {
		if (this.instance) {
			this.instance.destroy();
		}
	}

	initTooltip() {
		if (this.html) {
			this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.html, position: this.position });
		}
		else if (this.instance) {
			this.instance.destroy();
		}
	}
}
