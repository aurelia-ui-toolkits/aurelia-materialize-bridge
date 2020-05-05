import * as au from "../aurelia";

@au.customElement("md-input")
@au.autoinject
export class MdInput {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.controlId = `md-input-${MdInput.id++}`;
	}

	static id = 0;
	controlId: string;
	labelEl: HTMLLabelElement;
	input: HTMLInputElement;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay })
	label: string;

	@au.ato.bindable.booleanMd
	blurOnEnter: boolean = false;

	@au.ato.bindable.booleanMd
	disabled: boolean = false;

	@au.ato.bindable.booleanMd
	readonly: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	placeholder: string = "";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	textArea: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	type: string = "text";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	step: string = "any";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	validate: boolean = false;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	showErrortext: boolean = true;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	inline: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	updateTrigger: string[] = ["input", "change"];

	@au.ato.bindable.stringMd
	validateError: string;

	@au.ato.bindable.stringMd
	validateSuccess: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: string;
	valueChanged() {
		if (this.input === document.activeElement) {
			return;
		}
		this.taskQueue.queueTask(() => this.updateLabel());
	}

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	min: string = null;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	max: string = null;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	name: string = "";

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	maxlength: number = 524288;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	autocomplete: string = "";

	validateResults: au.ValidateResult[] = [];
	validationClass: string;

	bind() {
		// this suppresses initial changed handler calls
	}

	attached() {
		if (this.validate) {
			this.input.classList.add("validate");
		}
		if (this.placeholder) {
			this.input.setAttribute("placeholder", this.placeholder);
		}
		if (this.autocomplete) {
			this.input.setAttribute("autocomplete", this.autocomplete);
		}
		this.updateLabel();
		this.attachEventHandlers();
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		this.detachEventHandlers();
		this.validateResults = [];
		this.validationClass = undefined;
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	updateLabel() {
		au.updateLabel(this.input, this.labelEl);
		if (this.textArea) {
			M.textareaAutoResize(this.input);
		}
	}

	blur() {
		au.fireEvent(this.element, "blur");
	}

	focus() {
		this.input.focus();
		au.fireEvent(this.element, "focus");
	}

	attachEventHandlers() {
		if (this.blurOnEnter) {
			this.element.addEventListener("keyup", this.blurOnEnterHandler);
		}
	}

	detachEventHandlers() {
		if (this.blurOnEnter) {
			this.element.removeEventListener("keyup", this.blurOnEnterHandler);
		}
	}

	blurOnEnterHandler = (e) => {
		if (e.keyCode && e.keyCode === 13) {
			this.input.blur();
		}
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
