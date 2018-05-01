import * as au from "../aurelia";

@au.customElement("md-switch")
@au.autoinject
export class MdSwitch {
	constructor(private element: Element) { }

	checkbox: HTMLInputElement;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdChecked: boolean;
	mdCheckedChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.checked = !!newValue;
		}
	}

	@au.ato.bindable.booleanMd
	mdDisabled: boolean;

	@au.ato.bindable.booleanMd
	mdReadonly: boolean = false;

	@au.bindable
	mdLabelOff: string = "Off";

	@au.bindable
	mdLabelOn: string = "On";

	attached() {
		this.checkbox.checked = this.mdChecked;
		if (this.mdDisabled) {
			this.checkbox.disabled = true;
		}
		this.checkbox.addEventListener("change", this.handleChange);
	}

	detached() {
		if (this.checkbox) {
			this.checkbox.removeEventListener("change", this.handleChange);
		}
	}

	handleChange = () => {
		this.mdChecked = this.checkbox.checked;
		au.fireEvent(this.element, "blur");
	}

	blur() {
		au.fireEvent(this.element, "blur");
	}
}
