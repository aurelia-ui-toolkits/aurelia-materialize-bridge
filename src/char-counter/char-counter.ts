import { autoinject, bindable, bindingMode, children, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";

@customAttribute("md-char-counter")
@autoinject
export class MdCharCounter {
	constructor(private element: Element) {
		this.element = element;
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	@bindable
	length: number | string = 120;

	attached() {
		if (typeof this.length === "string") {
			this.length = parseInt(this.length, 10);
		}

		// attach to input and textarea elements explicitly, so this counter can be
		// used on containers (or custom elements like md-input)
		const tagName = this.element.tagName.toUpperCase();
		if (tagName === "INPUT" || tagName === "TEXTAREA") {
			this.attributeManager.addAttributes({ "data-length": this.length });
			$(this.element).characterCounter();
		} else {
			const elem = $(this.element).find("input,textarea");
			elem.each((i, el) => { $(el).attr("data-length", this.length); });
			elem.characterCounter();
		}
	}

	detached() {
		this.attributeManager.removeAttributes(["data-length"]);
	}
}
