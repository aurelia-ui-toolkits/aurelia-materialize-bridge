import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";

@au.customAttribute("md-waves")
@au.autoinject
export class MdWaves {
	constructor(private element: Element, private configBuilder: ConfigBuilder) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	circle: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	color: string;

	attached() {
		let classes = ["waves-effect"];
		if (this.circle) {
			classes.push("waves-circle");
		}
		if (this.color) {
			classes.push(`waves-${this.color}`);
		}

		this.attributeManager.addClasses(classes);
		if (!this.configBuilder.noWavesAttach) {
			Waves.attach(this.element);
		}
	}

	detached() {
		let classes = ["waves-effect", "waves-block"];
		if (this.color) {
			classes.push(`waves-${this.color}`);
		}
		this.attributeManager.removeClasses(classes);
	}
}
