import * as au from "../aurelia";

@au.autoinject
@au.customElement("md-datepicker")
export class MdDatePicker {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	static id = 0;
	controlId: string = `md-datepicker-${MdDatePicker.id++}`;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	inputField: HTMLDivElement;

	@au.ato.bindable.stringMd
	label: string = "";

	@au.ato.bindable.stringMd
	placeholder: string = "";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoClose: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	format: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	parse: (value: string, format: string) => Date;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	defaultDate: Date;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	setDefaultDate: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	disableWeekends: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	disableDayFn: (day: Date) => boolean;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	firstDay: number;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	minDate: Date;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	maxDate: Date;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	yearRange: number | number[];

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	isRTL: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	showMonthAfterYear: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	showDaysInNextAndPreviousMonths: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	container: Element;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	showClearBtn: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	i18n: Partial<M.DatepickerI18nOptions>;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	events: string[];

	@au.ato.bindable.booleanMd
	showErrortext: boolean = true;

	instance: M.Datepicker;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: Date;
	valueChangedSuppress: boolean;
	valueChanged() {
		if (this.valueChangedSuppress) {
			this.valueChangedSuppress = false;
			return;
		}
		this.instance.setDate(this.value);
		this.instance.setInputValue();
		// the widget can transform the value internally, so we need to update the final result
		this.taskQueue.queueTask(() => {
			this.setValue(this.instance.date);
		});
	}
	setValue(newValue: Date) {
		if (this.value !== newValue) {
			this.valueChangedSuppress = true;
			this.value = newValue;
		}
	}

	calendarIcon = null;

	attached() {
		if (this.placeholder) {
			this.input.setAttribute("placeholder", this.placeholder);
		}
		let options: Partial<M.DatepickerOptions> = {
			autoClose: this.autoClose,
			format: this.format,
			parse: this.parse,
			defaultDate: this.defaultDate,
			setDefaultDate: this.setDefaultDate,
			disableWeekends: this.disableWeekends,
			disableDayFn: this.disableDayFn,
			firstDay: this.firstDay,
			minDate: this.minDate,
			maxDate: this.maxDate,
			yearRange: this.yearRange,
			isRTL: this.isRTL,
			showMonthAfterYear: this.showMonthAfterYear,
			showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
			container: this.container,
			showClearBtn: this.showClearBtn,
			i18n: this.i18n,
			events: this.events,
			onSelect: selectedDate => au.fireMaterializeEvent(this.element, "select", { selectedDate }),
			onOpen: () => au.fireMaterializeEvent(this.element, "open"),
			onClose: () => au.fireMaterializeEvent(this.element, "close"),
			onDraw: () => au.fireMaterializeEvent(this.element, "draw")
		};
		au.cleanOptions(options);
		this.instance = new M.Datepicker(this.input, options);
		// doneBtn is not documented but this is the cleanest way to get the value when a user actually confirmed the date
		this.instance.doneBtn.addEventListener("click", this.done);
		if (this.instance.clearBtn) {
			this.instance.clearBtn.addEventListener("click", this.done);
		}
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.valueChanged();
	}

	done = () => {
		this.setValue(this.instance.date);
		au.fireEvent(this.element, "blur");
	}

	bind() {
		//
	}

	detached() {
		this.instance.doneBtn.removeEventListener("click", this.done);
		if (this.instance.clearBtn) {
			this.instance.clearBtn.removeEventListener("click", this.done);
		}
		// this.input.removeEventListener("change", this.onInputChange);
		this.instance.destroy();
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	open() {
		this.instance.open();
	}

	close() {
		this.instance.close();
	}

	mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.inputField, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		if (this.showErrortext && this.inputField) {
			for (let result of results) {
				if (!result.valid) {
					renderer.addMessage(this.inputField, result);
				}
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
