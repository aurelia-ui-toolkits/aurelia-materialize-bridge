import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { ConfigBuilder } from "../config-builder";

@customAttribute("md-waves")
@autoinject
export class MdWaves {
	constructor(private element: Element, private configBuilder: ConfigBuilder) {
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	block: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	circle: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	color: string;

	attached() {
		let classes = ["waves-effect"];
		if (getBooleanFromAttributeValue(this.block)) {
			classes.push("waves-block");
		}
		if (getBooleanFromAttributeValue(this.circle)) {
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
