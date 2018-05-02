import * as au from "../aurelia";

@au.customElement("md-input")
@au.autoinject
export class MdInput {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.controlId = `md-input-${MdInput.id++}`;
		this.blurOnEnter = this.blurOnEnter.bind(this);
	}

	static id = 0;
	controlId: string;
	label: HTMLLabelElement;
	input: HTMLInputElement;
	inputField: HTMLDivElement;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdLabel: string;

	@au.ato.bindable.booleanMd
	mdBlurOnEnter: boolean = false;

	@au.ato.bindable.booleanMd
	mdDisabled: boolean = false;

	@au.ato.bindable.booleanMd
	mdReadonly: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdPlaceholder: string = "";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTextArea: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdType: string = "text";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdStep: string = "any";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdValidate: boolean = false;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdShowErrortext: boolean = true;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdInline: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	mdUpdateTrigger: string[] = ["input", "change"];

	@au.ato.bindable.stringMd
	mdValidateError: string;

	@au.ato.bindable.stringMd
	mdValidateSuccess: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	mdValue: string;
	mdValueChanged() {
		if (this.input === document.activeElement) {
			return;
		}
		this.updateLabel();
	}

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMin: string = null;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMax: string = null;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdName: string = "";

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMaxlength: number = 524288;

	suspendUpdate = false;

	bind() {
		// this suppresses initial changed handler calls
	}

	attached() {
		if (this.mdValidate) {
			this.input.classList.add("validate");
		}
		if (this.mdPlaceholder) {
			this.input.setAttribute("placeholder", this.mdPlaceholder);
		}
		this.updateLabel();
		this.attachEventHandlers();
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		this.detachEventHandlers();
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	updateLabel() {
		au.updateLabel(this.input, this.label);
		if (this.mdTextArea) {
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
		if (this.mdBlurOnEnter) {
			this.element.addEventListener("keyup", this.blurOnEnter);
		}
	}

	detachEventHandlers() {
		if (this.mdBlurOnEnter) {
			this.element.removeEventListener("keyup", this.blurOnEnter);
		}
	}

	blurOnEnter(e) {
		if (e.keyCode && e.keyCode === 13) {
			this.input.blur();
		}
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
		if (this.mdShowErrortext && this.inputField) {
			for (let result of results) {
				if (!result.valid) {
					renderer.addMessage(this.inputField, result);
				}
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
