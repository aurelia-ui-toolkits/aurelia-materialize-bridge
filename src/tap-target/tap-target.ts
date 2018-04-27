import * as au from "../aurelia";

@au.customElement("md-tap-target")
@au.autoinject
export class MdTapTarget {
	constructor(private element: Element) {
		this.log = au.getLogger("md-tap-target");
	}

	static controlId = 0;
	log: au.Logger;

	@au.bindable
	mdRef: HTMLElement;
	instance: M.TapTarget;

	bind() {
		if (!this.mdRef) {
			throw new Error("md-tap-target needs a referenced element");
		} else {
			let id = this.mdRef.getAttribute("id");
			if (!id) {
				id = `md-tap-target-${MdTapTarget.controlId++}`;
				this.mdRef.setAttribute("id", id);
			}
			this.element.setAttribute("data-target", id);
		}
	}

	attached() {
		this.instance = new M.TapTarget(this.element, {
			onOpen: () => au.fireMaterializeEvent(this.element, "on-open"),
			onClose: () => au.fireMaterializeEvent(this.element, "on-close")
		});
	}

	detached(){
		this.instance.destroy();
	}

	open() {
		this.instance.open();
	}

	close() {
		this.instance.close();
	}
}
