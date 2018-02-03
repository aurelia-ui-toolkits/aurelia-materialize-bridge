import { customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";

@customAttribute("md-prefix")
@autoinject
export class MdPrefix {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	bind() {
		this.attributeManager.addClasses("prefix");
	}

	unbind() {
		this.attributeManager.removeClasses("prefix");
	}
}
