import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-checkbox")
@autoinject
export class MdCheckbox {
	constructor(private element: Element) {
		this.controlId = `md-checkbox-${MdCheckbox.id++}`;
	}

	static id = 0;
	controlId: string;
	attributeManager: AttributeManager;
	checkbox: HTMLInputElement;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdChecked: boolean | any[];

	@bindable
	mdDisabled: boolean | string;
	mdDisabledChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.disabled = !!newValue;
		}
	}

	@bindable
	mdReadonly: boolean = false;
	mdReadonlyChanged() {
		if (!this.checkbox) {
			return;
		}

		if (this.mdReadonly) {
			this.checkbox.addEventListener("change", this.preventChange);
		} else {
			this.checkbox.removeEventListener("change", this.preventChange);
		}
	}

	@bindable
	mdFilledIn: boolean | string;

	@bindable
	mdMatcher: (a: any, b: any) => boolean;

	@bindable
	mdModel: any;

	attached() {
		this.attributeManager = new AttributeManager(this.checkbox);
		if (getBooleanFromAttributeValue(this.mdFilledIn)) {
			this.attributeManager.addClasses("filled-in");
		}
		if (this.mdChecked === null) {
			this.checkbox.indeterminate = true;
		} else {
			this.checkbox.indeterminate = false;
		}
		if (getBooleanFromAttributeValue(this.mdDisabled)) {
			this.checkbox.disabled = true;
		}
		this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
		this.mdReadonlyChanged();
	}

	detached() {
		this.attributeManager.removeClasses(["filled-in", "disabled"]);
	}

	// it is called with an element as this
	preventChange(this: HTMLInputElement) {
		this.checked = !this.checked;
	}
}
