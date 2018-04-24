import { autoinject, bindingMode, customElement } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { bindable } from "aurelia-typed-observable-plugin";

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
	mdChecked?: boolean | any[];

	@bindable
	mdDisabled: boolean;
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
	mdFilledIn: boolean;

	@bindable
	mdMatcher: (a: any, b: any) => boolean;

	@bindable
	mdModel: any;

	attached() {
		this.attributeManager = new AttributeManager(this.checkbox);
		if (this.mdFilledIn) {
			this.attributeManager.addClasses("filled-in");
		}
		if (this.mdChecked === null) {
			this.checkbox.indeterminate = true;
		} else {
			this.checkbox.indeterminate = false;
		}
		if (this.mdDisabled) {
			this.checkbox.disabled = true;
		}
		this.mdReadonly = this.mdReadonly;
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
