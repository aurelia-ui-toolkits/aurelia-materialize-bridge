import * as au from "../aurelia";
import { MdInputUpdateService } from "./input-update-service";

@au.customElement("md-input")
@au.autoinject
export class MdInput {
	constructor(private element: Element, private taskQueue: au.TaskQueue, private updateService: MdInputUpdateService) {
		this.controlId = `md-input-${MdInput.id++}`;
		this.blurOnEnter = this.blurOnEnter.bind(this);
	}

	static id = 0;
	controlId: string;
	label: HTMLLabelElement;
	input: HTMLInputElement;
	inputField: HTMLDivElement;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdLabel: string;

	@au.bindable.booleanMd
	mdBlurOnEnter: boolean = false;

	@au.bindable.booleanMd
	mdDisabled: boolean = false;

	@au.bindable.booleanMd
	mdReadonly: boolean = false;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdPlaceholder: string = "";

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTextArea: boolean = false;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdType: string = "text";

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdStep: string = "any";

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdValidate: boolean = false;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdShowErrortext: boolean = true;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	mdUpdateTrigger: string[] = ["input", "change"];

	@au.bindable.stringMd
	mdValidateError: string;

	@au.bindable.stringMd
	mdValidateSuccess: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	mdValue: string;
	mdValueChanged() {
		if (this.input !== document.activeElement) {
			// the following is copied from the updateTextFields method
			// it is more efficient than updating all the inputs
			if (this.mdValue && this.mdValue.length > 0 || this.input.autofocus || this.input.hasAttribute("placeholder")) {
				this.label.classList.add("active");
			} else if (this.input.validity) {
				this.label.classList.toggle("active", this.input.validity.badInput === true);
			} else {
				this.label.classList.remove("active");
			}
			if (this.mdTextArea) {
				M.textareaAutoResize(this.input);
			}
		}
	}

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMin: string = null;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMax: string = null;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdName: string = "";

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMaxlength: number = 524288;

	suspendUpdate = false;

	bind() {
		// this suppresses initial changed handlers calls
	}

	attached() {
		if (this.mdValidate) {
			this.input.classList.add("validate");
		}
		if (this.mdValidateError) {
			this.label.setAttribute("data-error", this.mdValidateError);
		}
		if (this.mdValidateSuccess) {
			this.label.setAttribute("data-success", this.mdValidateSuccess);
		}
		if (this.mdPlaceholder) {
			this.input.setAttribute("placeholder", this.mdPlaceholder);
		}
		if (this.mdShowErrortext) {
			this.input.setAttribute("data-show-errortext", this.mdShowErrortext.toString());
		}
		this.updateService.update();

		// special case: time inputs are not covered by Materialize
		if (this.mdType === "time") {
			this.label.classList.add("active");
		}
		this.attachEventHandlers();
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		this.detachEventHandlers();
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
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
		if (this.label && results.find(x => !x.valid)) {
			this.label.removeAttribute("data-error");
		}
		if (this.input) {
			for (let result of results) {
				if (!result.valid) {
					(result as any).target = this.input;
					if (this.input.hasAttribute("data-show-errortext")) {
						renderer.addMessage(this.inputField, result);
					}
				}
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
