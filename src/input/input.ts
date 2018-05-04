import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { MdInputUpdateService } from "./input-update-service";
import { fireEvent } from "../common/events";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "..";

@customElement("md-input")
@autoinject
export class MdInput {
	constructor(private element: Element, private taskQueue: TaskQueue, private updateService: MdInputUpdateService) {
		this.controlId = `md-input-${MdInput.id++}`;
		this.blurOnEnter = this.blurOnEnter.bind(this);
	}

	static id = 0;
	controlId: string;
	label: HTMLLabelElement;
	input: HTMLInputElement;
	inputField: HTMLDivElement;

	@bindable
	mdLabel: string = "";
	@bindable
	mdBlurOnEnter: boolean | string = false;

	@bindable
	mdDisabled: boolean | string = false;

	@bindable
	mdReadonly: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdPlaceholder: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdTextArea: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdType: string = "text";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdStep: string = "any";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdValidate: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdShowErrortext: boolean | string = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdUpdateTrigger: string[] = ["input", "change"];

	@bindable
	mdValidateError: string;

	@bindable
	mdValidateSuccess: string;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdValue: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdMin: string = null;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdMax: string = null;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdName: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdMaxlength: number = 524288;

	suspendUpdate = false;

	bind() {
		this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
		this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
		this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
		this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
	}

	attached() {
		if (getBooleanFromAttributeValue(this.mdValidate)) {
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
			$(this.input).siblings("label").addClass("active");
		}
		this.attachEventHandlers();
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		this.detachEventHandlers();
		let validationMessages = Array.from(this.inputField.querySelectorAll("." + MaterializeFormValidationRenderer.className));
		validationMessages.forEach(x => x.remove());
		this.input.classList.remove("valid");
		this.input.classList.remove("invalid");
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	blur() {
		fireEvent(this.element, "blur");
	}

	focus() {
		this.input.focus();
		fireEvent(this.element, "focus");
	}

	mdValueChanged() {
		if (!$(this.input).is(":focus")) {
			this.updateService.update();
		}
		if (this.mdTextArea) {
			$(this.input).trigger("autoresize");
		}
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

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.inputField, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		if (this.label && results.find(x => !x.valid)) {
			this.label.removeAttribute("data-error");
		}
		if (this.inputField) {
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
