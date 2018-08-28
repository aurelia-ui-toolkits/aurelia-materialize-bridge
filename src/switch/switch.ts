import * as au from "../aurelia";

@au.customElement("md-switch")
@au.autoinject
export class MdSwitch {
	constructor(private element: Element) { }

	checkbox: HTMLInputElement;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay })
	checked: boolean;
	checkedChanged(newValue: boolean) {
		if (this.checkbox) {
			this.checkbox.checked = !!newValue;
		}
	}

	@au.ato.bindable.booleanMd
	disabled: boolean;
	disabledChanged() {
		if (this.checkbox) {
			this.checkbox.disabled = this.disabled;
		}
	}

	@au.ato.bindable.booleanMd
	readonly: boolean = false;

	@au.bindable
	labelOff: string = "Off";

	@au.bindable
	labelOn: string = "On";

	attached() {
		this.checkbox.checked = this.checked;
		this.disabledChanged();
		this.checkbox.addEventListener("change", this.handleChange);
	}

	detached() {
		if (this.checkbox) {
			this.checkbox.removeEventListener("change", this.handleChange);
		}
	}

	handleChange = () => {
		this.checked = this.checkbox.checked;
		au.fireEvent(this.element, "blur");
	}

	blur() {
		au.fireEvent(this.element, "blur");
	}
}
