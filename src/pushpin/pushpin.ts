import * as au from "../aurelia";

@au.customAttribute("md-pushpin")
@au.autoinject
export class MdPushpin {
	constructor(private element: Element) { }

	@au.bindable.numberMd
	bottom: number;

	@au.bindable.numberMd
	offset: number;

	@au.bindable.numberMd
	top: number;

	instance: M.Pushpin;

	attached() {
		let options: Partial<M.PushpinOptions> = {
			bottom: this.bottom,
			offset: this.offset,
			top: this.top,
			onPositionChange: position => au.fireMaterializeEvent(this.element, "position-change", { position })
		};
		au.cleanOptions(options);
		this.instance = new M.Pushpin(this.element, options);
	}

	detached() {
		this.instance.destroy();
	}
}
