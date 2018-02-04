import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
// import {fireEvent} from '../common/events';

// Materialize doesn't present the full api.
// See here for full api: https://github.com/weareoutman/clockpicker

@autoinject
@customAttribute("md-timepicker")
export class MdTimePicker {
	constructor(element: Element) {
		this.element = element as HTMLInputElement;
		this.updateFromElement = this.updateFromElement.bind(this);
	}

	element: HTMLInputElement;

	@bindable
	twelveHour: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	value: string;

	bind() {
		this.twelveHour = getBooleanFromAttributeValue(this.twelveHour);
	}

	attached() {
		let options = {
			twelvehour: this.twelveHour
		};
		$(this.element).pickatime(options);
		this.element.value = this.value;
		$(this.element).on("change", this.updateFromElement);
	}

	detached() {
		$(this.element).off("change", this.updateFromElement);
		$(this.element).pickatime("remove");
	}

	updateFromElement() {
		this.value = this.element.value;
	}

	valueChanged(newValue) {
		this.element.value = newValue;
	}
}
