import * as au from "../aurelia";

@au.autoinject
@au.customElement("md-timepicker")
export class MdTimePicker {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	static id = 0;
	controlId: string = `md-timepicker-${MdTimePicker.id++}`;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	validateResults: au.ValidateResult[] = [];
	validationClass: string;

	@au.ato.bindable.stringMd
	label: string = "";

	@au.ato.bindable.booleanMd
	inline: boolean;

	@au.ato.bindable.stringMd
	placeholder: string = "";

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	duration: number;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	container: string;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	showClearBtn: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	defaultTime: string;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	fromNow: number;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	i18n: Partial<M.InternationalizationOptions>;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoClose: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	twelveHour: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	vibrate: boolean;

	@au.ato.bindable.booleanMd
	showErrortext: boolean = true;

	instance: M.Timepicker;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: string;
	valueChangedSuppress: boolean;
	valueChanged() {
		if (this.valueChangedSuppress) {
			this.valueChangedSuppress = false;
			return;
		}
		this.input.value = this.value;
	}
	setValue(newValue: string) {
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
		let options: Partial<M.TimepickerOptions> = {
			duration: this.duration,
			container: this.container,
			showClearBtn: this.showClearBtn,
			defaultTime: this.defaultTime,
			fromNow: this.fromNow,
			i18n: this.i18n,
			autoClose: this.autoClose,
			twelveHour: this.twelveHour,
			vibrate: this.vibrate,
			onSelect: (hour: number, minute: number) => au.fireMaterializeEvent(this.element, "select", { hour, minute }),
			onOpenStart: () => au.fireMaterializeEvent(this.element, "open"),
			onOpenEnd: () => au.fireMaterializeEvent(this.element, "close"),
			onCloseStart: () => au.fireMaterializeEvent(this.element, "open"),
			onCloseEnd: () => au.fireMaterializeEvent(this.element, "close")
		};
		au.cleanOptions(options);
		this.instance = new M.Timepicker(this.input, options);
		this.input.addEventListener("change", this.done);
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.valueChanged();
		au.updateLabel(this.input, this.labelElement);
	}

	done = () => {
		this.setValue(this.input.value);
		au.fireEvent(this.element, "blur");
	}

	bind() {
		//
	}

	detached() {
		this.input.removeEventListener("change", this.done);
		this.instance.destroy();
		this.validateResults = [];
		this.validationClass = undefined;
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
		this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
		this.validationClass = undefined;
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		if (this.showErrortext) {
			this.validateResults.push(...results.filter(x => !x.valid));
		}
		this.validationClass = results.find(x => !x.valid) ? "invalid" : "valid";
	}
}
