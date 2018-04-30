import * as au from "../aurelia";

@au.customAttribute("md-footer")
@au.autoinject
export class MdFooter {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	bind() {
		this.attributeManager.addClasses("page-footer");
	}

	unbind() {
		this.attributeManager.removeClasses("page-footer");
	}
}
