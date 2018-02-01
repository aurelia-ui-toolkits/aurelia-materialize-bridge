import { autoinject, bindable } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@autoinject
export class MdBadge {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	@bindable()
	isNew: boolean | string = false;
	isNewChanged(newValue) {
		if (getBooleanFromAttributeValue(newValue)) {
			this.attributeManager.addClasses("new");
		} else {
			this.attributeManager.removeClasses("new");
		}
	}

	@bindable()
	caption: string = null;
	captionChanged(newValue) {
		if (newValue !== null) {
			this.attributeManager.addAttributes({ "data-badge-caption": newValue });
		} else {
			this.attributeManager.removeAttributes(["data-badge-caption"]);
		}
	}

	attributeManager: AttributeManager;

	attached() {
		let classes = ["badge"];

		if (getBooleanFromAttributeValue(this.isNew)) {
			classes.push("new");
		}

		if (this.caption !== null) {
			this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
		}

		this.attributeManager.addClasses(classes);
	}

	detached() {
		this.attributeManager.removeClasses(["badge", "new"]);
		this.attributeManager.removeAttributes(["data-badge-caption"]);
	}
}
