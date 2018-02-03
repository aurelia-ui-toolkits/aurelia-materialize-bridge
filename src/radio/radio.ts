import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-radio")
@autoinject
export class MdRadio {
	constructor(private element: Element) {
		this.controlId = `md-radio-${MdRadio.id++}`;
		// this.handleChange = this.handleChange.bind(this);
	}

	static id = 0;
	controlId: string;
	attributeManager: AttributeManager;
	radio: HTMLInputElement;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdChecked: boolean | string;

	@bindable
	mdDisabled: boolean | string = false;
	mdDisabledChanged(newValue: boolean | string) {
		if (this.radio) {
			this.radio.disabled = !!newValue;
		}
	}

	@bindable
	mdReadonly: boolean | string = false;

	@bindable
	mdGap: boolean | string = false;

	@bindable
	mdModel: any;

	@bindable
	mdName: string = "";

	@bindable
	mdValue: string = "";

	attached() {
		this.attributeManager = new AttributeManager(this.radio);
		if (getBooleanFromAttributeValue(this.mdGap)) {
			this.attributeManager.addClasses("with-gap");
		}
		if (getBooleanFromAttributeValue(this.mdDisabled)) {
			this.radio.disabled = true;
		}
		this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
	}

	detached() {
		this.attributeManager.removeClasses(["with-gap", "disabled"]);
	}
}
