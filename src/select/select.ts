import * as au from "../aurelia";
import "./select.css";

@au.autoinject
@au.customAttribute("md-select")
export class MdSelect {
	constructor(element: Element, private bindingEngine: au.BindingEngine, private taskQueue: au.TaskQueue) {
		this.element = element as HTMLInputElement;
		this.log = au.getLogger("md-select");
	}

	instance: M.FormSelect;
	log: au.Logger;
	element: HTMLInputElement;
	labelElement: HTMLLabelElement;
	readonlyDiv: HTMLDivElement;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;
	suppressValueChanged: boolean;
	valueChanged() {
		this.log.debug("valueChanged");
		if (!this.instance) {
			return;
		}
		if (this.suppressValueChanged) {
			this.log.debug("valueChanged suppressed");
			this.suppressValueChanged = false;
			return;
		}
		this.element.value = this.value;
		this.createMaterialSelect(false);
	}

	@au.bindable
	disabled: boolean = false;
	disabledChanged() {
		if (!this.instance) {
			return;
		}
		if (this.disabled) {
			this.instance.wrapper.querySelector(".caret").classList.add("disabled");
			this.instance.input.setAttribute("disabled", "disabled");
			this.instance.wrapper.setAttribute("disabled", "disabled");
		} else {
			this.instance.wrapper.querySelector(".caret").classList.remove("disabled");
			this.instance.input.removeAttribute("disabled");
			this.instance.wrapper.removeAttribute("disabled");
		}
	}

	@au.bindable
	readonly: boolean = false;
	readonlyChanged() {
		if (!this.readonlyDiv) {
			return;
		}
		this.readonlyDiv.hidden = !this.readonly;
		if (this.readonly) {
			this.instance.input.addEventListener("focus", this.triggerBlur);
		}
		else {
			this.instance.input.removeEventListener("focus", this.triggerBlur);
		}
	}

	triggerBlur = () => {
		(this.instance.input as HTMLInputElement).blur();
	}

	@au.bindable
	enableOptionObserver: boolean = false;

	@au.bindable
	label: string = "";
	labelChanged() {
		if (this.labelElement) {
			this.labelElement.textContent = this.label;
		}
	}

	@au.bindable
	showErrortext: boolean = true;
	showErrortextChanged() {
		if (this.instance) {
			this.log.debug("showErrortextChanged: " + this.showErrortext);
			this.instance.input.setAttribute("data-show-errortext", this.showErrortext.toString());
		}
	}

	suspendUpdate: boolean = false;
	subscriptions = [];
	inputField: HTMLDivElement = null;
	optionsMutationObserver = null;

	attached() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}

		this.inputField = document.createElement("div");
		this.inputField.classList.add("input-field");
		let va = this.element.getAttributeNode("validate");
		if (va) {
			this.inputField.setAttribute(va.name, va.value);
		}

		au.wrap(this.inputField, this.element);
		this.labelElement = document.createElement("label");
		this.labelElement.classList.add("md-select-label");
		au.insertAfter(this.element, this.labelElement);
		this.labelChanged();
		this.taskQueue.queueTask(() => this.createMaterialSelect(false));
		this.element.addEventListener("change", this.handleChangeFromNativeSelect);
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		if (!this.instance) {
			return;
		}
		this.element.removeEventListener("change", this.handleChangeFromNativeSelect);
		this.observeOptions(false);
		this.instance.destroy();
		// this will remove input-field wrapper and all its' content like validation messsages or a label
		au.unwrap(this.element);
		this.inputField = null;
		this.labelElement = null;
		this.readonlyDiv = null;
		this.subscriptions.forEach(sub => sub.dispose());
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	refresh() {
		if (!this.instance) {
			return;
		}
		this.taskQueue.queueTask(() => this.createMaterialSelect(true));
	}

	handleChangeFromNativeSelect = () => {
		this.log.debug("handleChangeFromNativeSelect", this.element.value);
		this.suppressValueChanged = true;
		this.value = this.element.value;
		au.fireEvent(this.element, "blur");
	}

	createMaterialSelect(destroy) {
		this.observeOptions(false);
		let isValid = false;
		let isInvalid = false;
		if (this.instance) {
			isValid = this.instance.input.classList.contains("valid");
			isInvalid = this.instance.input.classList.contains("invalid");
			if (destroy) {
				this.instance.destroy();
			}
		}
		this.instance = new M.FormSelect(this.element, {});
		if (isValid) {
			this.instance.input.classList.add("valid");
		}
		if (isInvalid) {
			this.instance.input.classList.add("invalid");
		}
		this.readonlyDiv = document.createElement("div");
		this.readonlyDiv.classList.add("readonly-div");
		this.instance.input.parentElement.insertBefore(this.readonlyDiv, this.instance.input);
		this.instance.input.addEventListener("focus", this.handleFocus);
		this.instance.input.addEventListener("blur", this.handleBlur);
		this.observeOptions(true);
		this.showErrortextChanged();
		this.readonlyChanged();
		this.disabledChanged();
	}

	observeOptions(attach) {
		if (!this.enableOptionObserver) {
			return;
		}
		if (attach) {
			if (!this.optionsMutationObserver) {
				this.optionsMutationObserver = au.DOM.createMutationObserver(mutations => {
					// this.log.debug('observeOptions', mutations);
					this.refresh();
				});
			}
			this.optionsMutationObserver.observe(this.element, {
				// childList: true,
				characterData: true,
				subtree: true
			});
		} else {
			if (this.optionsMutationObserver) {
				this.optionsMutationObserver.disconnect();
				this.optionsMutationObserver.takeRecords();
			}
		}
	}

	open() {
		if (!this.instance) {
			return;
		}
		(this.instance.input as HTMLInputElement).focus();
	}

	handleFocus = () => {
		this.labelElement.classList.add("md-focused");
	}

	handleBlur = () => {
		this.labelElement.classList.remove("md-focused");
	}

	mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		if (!this.instance.input) {
			return;
		}
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.inputField, result);
			}
		}
		renderer.removeValidationClasses(this.instance.input);
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		if (!this.instance.input) {
			return;
		}
		for (let result of results) {
			if (!result.valid) {
				(result as any).target = this.instance.input;
				if (!(this.instance.input.hasAttribute("data-show-errortext") && this.instance.input.getAttribute("data-show-errortext") === "false")) {
					renderer.addMessage(this.inputField, result);
				}
			}
		}
		renderer.addValidationClasses(this.instance.input, !results.find(x => !x.valid));
	}
}
