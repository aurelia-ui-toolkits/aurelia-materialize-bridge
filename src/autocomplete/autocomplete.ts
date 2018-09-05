import * as au from "../aurelia";

@au.customAttribute("md-autocomplete")
@au.autoinject
export class MdAutoComplete {
	constructor(private element: Element) { }

	input: Element = null;

	@au.ato.bindable.numberMd
	limit: number;

	@au.ato.bindable.numberMd
	minLength: number;

	@au.bindable
	values: any = {};
	valuesChanged() {
		this.instance.updateData(this.values);
	}

	instance: M.Autocomplete;

	bind() {
		// suppress initial change handler calls
	}

	attached() {
		if (this.element.tagName.toLowerCase() === "input") {
			this.input = this.element;
		}
		else if (this.element.tagName.toLowerCase() === "md-input") {
			this.input = this.element.au["md-input"].viewModel.input;
		}
		else {
			throw new Error("md-autocomplete must be attached to either an input or md-input element");
		}
		let options: Partial<M.AutocompleteOptions> = {
			data: this.values,
			limit: this.limit,
			minLength: this.minLength,
			onAutocomplete: text => {
				au.fireMaterializeEvent(this.element, "autocomplete", { text });
			}
		};
		au.cleanOptions(options);
		this.instance = new M.Autocomplete(this.input, options);
	}

	detached() {
		this.instance.destroy();
	}
}
