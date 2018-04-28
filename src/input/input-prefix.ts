import * as au from "../aurelia";

@au.customAttribute("md-prefix")
@au.autoinject
export class MdPrefix {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	bind() {
		this.attributeManager.addClasses("prefix");
	}

	unbind() {
		this.attributeManager.removeClasses("prefix");
	}
}
