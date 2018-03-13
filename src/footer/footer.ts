import { customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";

@customAttribute("md-footer")
@autoinject
export class MdFooter {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	bind() {
		this.attributeManager.addClasses("page-footer");
	}

	unbind() {
		this.attributeManager.removeClasses("page-footer");
	}
}
