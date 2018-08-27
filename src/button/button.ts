import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";

@au.customAttribute("md-button")
@au.autoinject
export class MdButton {
	constructor(private element: Element, private configBuilder: ConfigBuilder) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	@au.ato.bindable.booleanMd
	disabled: boolean = false;
	disabledChanged() {
		if (this.disabled) {
			this.attributeManager.addClasses("disabled");
		} else {
			this.attributeManager.removeClasses("disabled");
		}
	}

	@au.ato.bindable.booleanMd
	flat: boolean = false;
	flatChanged() {
		if (this.flat) {
			this.attributeManager.addClasses("btn-flat");
			this.attributeManager.removeClasses("btn");
		} else {
			this.attributeManager.removeClasses("btn-flat");
			this.attributeManager.addClasses("btn");
		}
	}

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	floating: boolean = false;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	large: boolean = false;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	small: boolean = false;

	@au.ato.bindable.booleanMd
	pulse: boolean = false;
	pulseChanged() {
		if (this.pulse) {
			this.attributeManager.addClasses("pulse");
		} else {
			this.attributeManager.removeClasses("pulse");
		}
	}

	attached() {
		const classes = [];

		if (this.configBuilder.autoButtonWaves && !this.element.hasAttribute("md-waves")) {
			classes.push("waves-effect");
			if (this.flat) {
				classes.push("waves-secondary");
			}
			else {
				classes.push("waves-light");
			}
			Waves.attach(this.element);
		}

		this.flatChanged();
		if (this.floating) {
			classes.push("btn-floating");
		}
		if (this.large) {
			classes.push("btn-large");
		}
		if (this.small) {
			classes.push("btn-small");
		}
		this.disabledChanged();
		this.pulseChanged();
		this.flatChanged();
		this.attributeManager.addClasses(classes);
	}

	detached() {
		this.attributeManager.removeClasses(["btn", "btn-flat", "btn-large", "disabled", "pulse", "waves-secondary", "waves-light", "waves-effect", "waves-block"]);
	}
}
