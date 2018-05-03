import * as au from "../aurelia";

@au.customElement("md-radio")
@au.autoinject
export class MdRadio {
	constructor(private element: Element) {
		this.controlId = `md-radio-${MdRadio.id++}`;
	}

	static id = 0;
	controlId: string;
	attributeManager: au.AttributeManager;
	radio: HTMLInputElement;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	checked: boolean | string;

	@au.ato.bindable.booleanMd
	disabled: boolean = false;
	disabledChanged(newValue: boolean) {
		if (this.radio) {
			this.radio.disabled = newValue;
		}
	}

	@au.ato.bindable.booleanMd
	readonly: boolean = false;

	@au.ato.bindable.booleanMd
	gap: boolean = false;

	@au.bindable
	model: any;

	@au.ato.bindable.stringMd
	name: string = "";

	@au.ato.bindable.stringMd
	value: string = "";

	attached() {
		this.attributeManager = new au.AttributeManager(this.radio);
		if (this.gap) {
			this.attributeManager.addClasses("with-gap");
		}
		if (this.disabled) {
			this.radio.disabled = true;
		}
	}

	detached() {
		this.attributeManager.removeClasses(["with-gap", "disabled"]);
	}
}
