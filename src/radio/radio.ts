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
	mdChecked: boolean | string;

	@au.ato.bindable.booleanMd
	mdDisabled: boolean = false;
	mdDisabledChanged(newValue: boolean) {
		if (this.radio) {
			this.radio.disabled = newValue;
		}
	}

	@au.ato.bindable.booleanMd
	mdReadonly: boolean = false;

	@au.ato.bindable.booleanMd
	mdGap: boolean = false;

	@au.bindable
	mdModel: any;

	@au.ato.bindable.stringMd
	mdName: string = "";

	@au.ato.bindable.stringMd
	mdValue: string = "";

	attached() {
		this.attributeManager = new au.AttributeManager(this.radio);
		if (this.mdGap) {
			this.attributeManager.addClasses("with-gap");
		}
		if (this.mdDisabled) {
			this.radio.disabled = true;
		}
	}

	detached() {
		this.attributeManager.removeClasses(["with-gap", "disabled"]);
	}
}
