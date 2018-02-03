import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { fireMaterializeEvent } from "../common/events";

@customAttribute("md-modal-trigger")
@autoinject
export class MdModalTrigger {
	@bindable() dismissible = true;

	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
		this.onComplete = this.onComplete.bind(this);
	}

	attributeManager: AttributeManager;

	attached() {
		this.attributeManager.addClasses("modal-trigger");
		$(this.element).leanModal({
			complete: this.onComplete,
			dismissible: getBooleanFromAttributeValue(this.dismissible)
		});
	}

	detached() {
		this.attributeManager.removeClasses("modal-trigger");
	}

	onComplete() {
		fireMaterializeEvent(this.element, "modal-complete");
	}
}
