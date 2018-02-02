import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-button")
@autoinject
export class MdButton {
	@bindable
	disabled: boolean | string = false;
	disabledChanged(newValue: boolean | string) {
		if (getBooleanFromAttributeValue(newValue)) {
			this.attributeManager.addClasses("disabled");
		} else {
			this.attributeManager.removeClasses("disabled");
		}
	}

	@bindable
	flat: boolean | string = false;
	flatChanged(newValue: boolean | string) {
		if (getBooleanFromAttributeValue(newValue)) {
			this.attributeManager.removeClasses(["btn", "accent"]);
			this.attributeManager.addClasses("btn-flat");
		} else {
			this.attributeManager.removeClasses("btn-flat");
			this.attributeManager.addClasses(["btn", "accent"]);
		}
	}

	@bindable
	floating = false;

	@bindable
	large = false;

	@bindable
	pulse: boolean | string = false;
	pulseChanged(newValue) {
		if (getBooleanFromAttributeValue(newValue)) {
			this.attributeManager.addClasses("pulse");
		} else {
			this.attributeManager.removeClasses("pulse");
		}
	}

	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(element);
	}

	attributeManager: AttributeManager;

	attached() {
		let classes = [];

		if (getBooleanFromAttributeValue(this.flat)) {
			classes.push("btn-flat");
		}
		if (getBooleanFromAttributeValue(this.floating)) {
			classes.push("btn-floating");
		}
		if (getBooleanFromAttributeValue(this.large)) {
			classes.push("btn-large");
		}
		if (classes.length === 0) {
			classes.push("btn");
		}
		if (getBooleanFromAttributeValue(this.disabled)) {
			classes.push("disabled");
		}
		if (!getBooleanFromAttributeValue(this.flat)) {
			classes.push("accent");
		}
		if (getBooleanFromAttributeValue(this.pulse)) {
			classes.push("pulse");
		}
		this.attributeManager.addClasses(classes);
	}

	detached() {
		this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
	}
}
