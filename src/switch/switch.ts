import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";

@customElement("md-switch")
@autoinject
export class MdSwitch {
	constructor(private element: Element) {
		this.handleChange = this.handleChange.bind(this);
	}

	checkbox: HTMLInputElement;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdChecked: boolean | string;
	mdCheckedChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.checked = !!newValue;
		}
	}

	@bindable
	mdDisabled: boolean | string;
	mdDisabledChanged(newValue) {
		if (this.checkbox) {
			this.checkbox.disabled = !!newValue;
		}
	}

	@bindable
	mdReadonly: boolean | string = false;

	@bindable
	mdLabelOff: string = "Off";

	@bindable
	mdLabelOn: string = "On";

	attached() {
		this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
		if (getBooleanFromAttributeValue(this.mdDisabled)) {
			this.checkbox.disabled = true;
		}
		this.checkbox.addEventListener("change", this.handleChange);
		this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
	}

	detached() {
		if (this.checkbox) {
			this.checkbox.removeEventListener("change", this.handleChange);
		}
	}

	handleChange() {
		this.mdChecked = this.checkbox.checked;
		fireEvent(this.element, "blur");
	}

	blur() {
		fireEvent(this.element, "blur");
	}
}
