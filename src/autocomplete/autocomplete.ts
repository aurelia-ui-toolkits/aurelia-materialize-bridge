import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { fireEvent } from "../common/events";

@customAttribute("md-autocomplete")
@autoinject
export class MdAutoComplete {
	constructor(private element: Element) { }

	input: Element = null;

	@bindable
	limit: number = 20;

	@bindable
	minLength: number = 1;

	@bindable
	values: any = {};

	attached() {
		if (this.element.tagName.toLowerCase() === "input") {
			this.input = this.element;
		} else if (this.element.tagName.toLowerCase() === "md-input") {
			this.input = this.element.au.controller.viewModel.input;
		} else {
			throw new Error("md-autocomplete must be attached to either an input or md-input element");
		}
		this.refresh();
	}

	detached() {
		// remove .autocomplete-content children
		$(this.input).siblings(".autocomplete-content").off("click");
		$(this.input).siblings(".autocomplete-content").remove();
	}

	refresh() {
		this.detached();
		$(this.input).autocomplete({
			data: this.values,
			minLength: this.minLength,
			limit: this.limit,
			onAutocomplete: () => fireEvent(this.input, "change")
		});
		$(this.input).siblings(".autocomplete-content").on("click", () => {
			fireEvent(this.input, "change");
		});
	}

	valuesChanged(newValue) {
		this.refresh();
	}
}
