import * as au from "../aurelia";

@au.customAttribute("md-char-counter")
@au.autoinject
export class MdCharCounter {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	@au.ato.bindable.numberMd
	length: number = 120;

	instances: M.CharacterCounter[] = [];

	attached() {
		// attach to input and textarea elements explicitly, so this counter can be
		// used on containers (or custom elements like md-input)
		const tagName = this.element.tagName.toUpperCase();
		if (tagName === "INPUT" || tagName === "TEXTAREA") {
			this.attributeManager.addAttributes({ "data-length": this.length });
			this.instances.push(new M.CharacterCounter(this.element));
		}
		else {
			const elem = Array.from(this.element.querySelectorAll("input,textarea"));
			elem.forEach(el => {
				el.setAttribute("data-length", this.length.toString());
				this.instances.push(new M.CharacterCounter(el));
			});
		}
	}

	detached() {
		this.instances.forEach(x => x.destroy());
		this.attributeManager.removeAttributes(["data-length"]);
	}
}
