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
	checked: boolean | any[];

	@au.ato.bindable.booleanMd
	disabled: boolean;
	disabledChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.disabled = !!newValue;
		}
	}

	@au.ato.bindable.booleanMd
	readonly: boolean = false;
	readonlyChanged() {
		if (!this.checkbox) {
			return;
		}

		if (this.readonly) {
			this.checkbox.addEventListener("change", this.preventChange);
		} else {
			this.checkbox.removeEventListener("change", this.preventChange);
		}
	}

	@au.ato.bindable.booleanMd
	filledIn: boolean;

	@au.bindable
	matcher: (a: any, b: any) => boolean;

	@au.bindable
	model: any;

	attached() {
		this.attributeManager = new au.AttributeManager(this.checkbox);
		if (this.filledIn) {
			this.attributeManager.addClasses("filled-in");
		}
		if (this.checked === null) {
			this.checkbox.indeterminate = true;
		} else {
			this.checkbox.indeterminate = false;
		}
		if (this.disabled) {
			this.checkbox.disabled = true;
		}
		this.readonlyChanged();
	}

	detached() {
		this.attributeManager.removeClasses(["filled-in", "disabled"]);
	}

	// it is called with an element as this
	preventChange(this: HTMLInputElement) {
		this.checked = !this.checked;
	}
}
