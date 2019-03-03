import * as au from "../aurelia";

@au.autoinject
@au.customElement("md-timepicker")
export class MdTimePicker {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	static id = 0;
	controlId: string = `md-timepicker-${MdTimePicker.id++}`;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	inputField: HTMLDivElement;

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
		au.MaterializeFormValidationRenderer.removeValidation(this.inputField, this.input);
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
