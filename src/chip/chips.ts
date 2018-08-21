import * as au from "../aurelia";

@au.customAttribute("md-chips")
@au.autoinject
export class MdChips {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.log = au.getLogger("md-chips");
	}

	log: au.Logger;

	@au.bindable
	autocompleteData: M.AutocompleteData = {};

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	data: M.ChipData[] = [];
	dataChanged(newValue: any[], oldValue: any[]) {
		this.refresh();

		// I know this is a bit naive..
		if (newValue.length > oldValue.length) {
			const chip = newValue.find(i => !oldValue.includes(i));
			au.fireEvent(this.element, "change", { source: "dataChanged", operation: "add", target: chip, data: newValue });
		}
		if (newValue.length < oldValue.length) {
			const chip = oldValue.find(i => !newValue.includes(i));
			au.fireEvent(this.element, "change", { source: "dataChanged", operation: "delete", target: chip, data: newValue });
		}
	}

	@au.ato.bindable.stringMd
	placeholder: string;

	@au.ato.bindable.stringMd
	secondaryPlaceholder: string;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	limit: number;

	instance: M.Chips;

	bind() {
		// suppress initial change handler calls
	}

	attached() {
		this.refresh();
	}

	detached() {
		this.instance.destroy();
	}

	refresh() {
		const options: Partial<M.ChipsOptions> = {
			data: this.data,
			placeholder: this.placeholder,
			limit: this.limit,
			secondaryPlaceholder: this.secondaryPlaceholder,
			onChipAdd: () => this.data = this.instance.chipsData,
			onChipDelete: () => this.data = this.instance.chipsData,
			onChipSelect: (e, chip) => au.fireEvent(this.element, "selected", { target: chip })
		};
		if (this.autocompleteData) {
			options.autocompleteOptions = { data: this.autocompleteData };
		}
		au.cleanOptions(options);
		this.instance = new M.Chips(this.element, options);
	}
}
