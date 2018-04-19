import { autoinject, customAttribute, bindingMode } from "aurelia-framework";
import { bindable } from "aurelia-typed-observable-plugin";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-button")
@autoinject
export class MdButton {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(element);
	}

	attributeManager: AttributeManager;

	@bindable
	disabled: boolean = false;
	disabledChanged(newValue: boolean) {
		if (newValue) {
			this.attributeManager.addClasses("disabled");
		} else {
			this.attributeManager.removeClasses("disabled");
		}
	}

	@bindable
	flat: boolean = false;
	flatChanged(newValue: boolean) {
		if (newValue) {
			this.attributeManager.addClasses("btn-flat");
		} else {
			this.attributeManager.removeClasses("btn-flat");
		}
	}

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	floating: boolean = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	large: boolean = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	small: boolean = false;

	@bindable
	pulse: boolean = false;
	pulseChanged(newValue: boolean) {
		if (newValue) {
			this.attributeManager.addClasses("pulse");
		} else {
			this.attributeManager.removeClasses("pulse");
		}
	}

	attached() {
		const classes = [];

		if (this.flat) {
			classes.push("btn-flat");
		}
		if (this.floating) {
			classes.push("btn-floating");
		}
		if (this.large) {
			classes.push("btn-large");
		}
		if (this.small) {
			classes.push("btn-small");
		}
		if (this.disabled) {
			classes.push("disabled");
		}
		if (this.pulse) {
			classes.push("pulse");
		}
		classes.push("btn");
		this.attributeManager.addClasses(classes);
	}

	detached() {
		this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
	}
}
