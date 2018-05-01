import * as au from "../aurelia";

@au.customElement("md-checkbox")
@au.autoinject
export class MdCheckbox {
	constructor(private element: Element) {
		this.controlId = `md-checkbox-${MdCheckbox.id++}`;
	}

	static id = 0;
	controlId: string;
	attributeManager: au.AttributeManager;
	checkbox: HTMLInputElement;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	mdChecked?: boolean | any[];

	@au.ato.bindable.booleanMd
	mdDisabled: boolean;
	mdDisabledChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.disabled = !!newValue;
		}
	}

	@au.ato.bindable.booleanMd
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

	@au.ato.bindable.booleanMd
	mdFilledIn: boolean;

	@au.bindable
	mdMatcher: (a: any, b: any) => boolean;

	@au.bindable
	mdModel: any;

	attached() {
		this.attributeManager = new au.AttributeManager(this.checkbox);
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
