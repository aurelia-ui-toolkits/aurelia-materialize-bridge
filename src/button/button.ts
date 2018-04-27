import * as au from "../aurelia";

@au.customAttribute("md-button")
@au.autoinject
export class MdButton {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(element);
	}

	attributeManager: au.AttributeManager;

	@au.bindable.booleanMd
	disabled: boolean = false;
	disabledChanged(newValue: boolean) {
		if (newValue) {
			this.attributeManager.addClasses("disabled");
		} else {
			this.attributeManager.removeClasses("disabled");
		}
	}

	@au.bindable.booleanMd
	flat: boolean = false;
	flatChanged(newValue: boolean) {
		if (newValue) {
			this.attributeManager.addClasses("btn-flat");
		} else {
			this.attributeManager.removeClasses("btn-flat");
		}
	}

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	floating: boolean = false;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	large: boolean = false;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	small: boolean = false;

	@au.bindable.booleanMd
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
