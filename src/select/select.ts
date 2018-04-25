import { customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { BindingEngine } from "aurelia-binding";
import { TaskQueue } from "aurelia-task-queue";
import { getLogger, Logger } from "aurelia-logging";
import { fireEvent } from "../common/events";
import { DOM } from "aurelia-pal";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "../validation/validationRenderer";
import { bindable } from "aurelia-typed-observable-plugin";
import * as dom from "../common/dom";
import "./select.css";

@autoinject
@customAttribute("md-select")
export class MdSelect {
	constructor(element: Element, private bindingEngine: BindingEngine, private taskQueue: TaskQueue) {
		this.element = element as HTMLInputElement;
		this.handleBlur = this.handleBlur.bind(this);
		this.log = getLogger("md-select");
		this.handleFocus = this.handleFocus.bind(this);
	}

	instance: M.FormSelect;
	log: Logger;
	element: HTMLInputElement;
	labelElement: HTMLLabelElement;
	readonlyDiv: HTMLDivElement;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
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
		// this.instance = new M.FormSelect(this.element, {});
	}
	setValue(newValue: any) {
		this.suppressValueChanged = true;
		this.value = newValue;
	}

	@bindable
	disabled: boolean = false;
	disabledChanged() {
		if (!this.instance) {
			return;
		}
		if (this.disabled) {
			this.instance.wrapper.querySelector(".caret").classList.add("disabled");
			this.input.setAttribute("disabled", "disabled");
			this.instance.wrapper.setAttribute("disabled", "disabled");
		} else {
			this.instance.wrapper.querySelector(".caret").classList.remove("disabled");
			this.input.removeAttribute("disabled");
			this.instance.wrapper.removeAttribute("disabled");
		}
	}

	@bindable
	readonly: boolean = false;
	readonlyChanged() {
		if (this.readonlyDiv) {
			this.readonlyDiv.hidden = !this.readonly;
		}
	}

	@bindable
	enableOptionObserver: boolean = false;

	@bindable
	label: string = "";
	labelChanged() {
		if (this.labelElement) {
			this.labelElement.textContent = this.label;
		}
	}

	@bindable
	showErrortext: boolean = true;
	showErrortextChanged() {
		if (this.input) {
			this.log.debug("showErrortextChanged: " + this.showErrortext);
			this.input.setAttribute("data-show-errortext", this.showErrortext.toString());
		}
	}

	suspendUpdate: boolean = false;
	subscriptions = [];
	inputField: HTMLDivElement = null;
	input: Element = null;
	dropdownMutationObserver = null;
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

		dom.wrap(this.inputField, this.element);
		this.labelElement = document.createElement("label");
		this.labelElement.classList.add("md-select-label");
		dom.insertAfter(this.element, this.labelElement);
		this.labelChanged();

		this.taskQueue.queueTask(() => {
			this.createMaterialSelect(false);
		});
		// this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, "value").subscribe(this.handleChangeFromViewModel));

		this.element.addEventListener("change", this.handleChangeFromNativeSelect);
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	detached() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}

		// this.element.removeEventListener("change", this.handleChangeFromNativeSelect);
		// this.observeVisibleDropdownContent(false);
		// this.observeOptions(false);
		this.dropdownMutationObserver = null;
		this.instance.destroy();
		// this will remove input-field wrapper and all its' content like validation messsages or a label
		dom.unwrap(this.element);
		this.input = null;
		this.inputField = null;
		this.labelElement = null;
		this.readonlyDiv = null;
		this.subscriptions.forEach(sub => sub.dispose());
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	refresh() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		this.taskQueue.queueTask(() => {
			this.createMaterialSelect(true);
		});
	}

	handleChangeFromNativeSelect = () => {
		this.log.debug("handleChangeFromNativeSelect", this.element.value);
		this.setValue(this.element.value);
		// if (this.element.classList.contains("browser-default")) {
		// 	return;
		// }
		// if (!this.suspendUpdate) {
		// 	this.log.debug("handleChangeFromNativeSelect", this.element.value);
		// 	this.suspendUpdate = true;
		// 	fireEvent(this.element, "change");
		// 	this.suspendUpdate = false;
		// }
	}

	handleChangeFromViewModel = (newValue) => {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		this.log.debug("handleChangeFromViewModel", newValue, this.element.value);
		if (!this.suspendUpdate) {
			this.createMaterialSelect(false);
		}
	}

	createMaterialSelect(destroy) {
		if ((this.element).classList.contains("browser-default")) {
			return;
		}
		// this.observeVisibleDropdownContent(false);
		// this.observeOptions(false);
		let isValid = false;
		let isInvalid = false;
		if (this.instance) {
			isValid = this.input.classList.contains("valid");
			isInvalid = this.input.classList.contains("invalid");
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
		this.input = this.instance.input;
		this.readonlyDiv = document.createElement("div");
		this.readonlyDiv.classList.add("readonly-div");
		this.input.parentElement.insertBefore(this.readonlyDiv, this.input);
		// this.observeVisibleDropdownContent(true);
		// this.observeOptions(true);
		this.showErrortextChanged();
		this.readonlyChanged();
		this.disabledChanged();
	}

	observeVisibleDropdownContent(attach) {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		if (attach) {
			if (!this.dropdownMutationObserver) {
				this.dropdownMutationObserver = DOM.createMutationObserver(mutations => {
					let isHidden = false;
					for (let mutation of mutations) {
						if (window.getComputedStyle(mutation.target).getPropertyValue("display") === "none") {
							isHidden = true;
						}
					}
					if (isHidden) {
						this.dropdownMutationObserver.takeRecords();
						this.handleBlur();
					} else {
						this.handleFocus();
					}
				});
			}
			this.dropdownMutationObserver.observe(this.element.parentElement.querySelector(".dropdown-content"), {
				attributes: true,
				attributeFilter: ["style"]
			});
		} else {
			if (this.dropdownMutationObserver) {
				this.dropdownMutationObserver.disconnect();
				this.dropdownMutationObserver.takeRecords();
			}
		}
	}

	observeOptions(attach) {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		if (this.enableOptionObserver) {
			if (attach) {
				if (!this.optionsMutationObserver) {
					this.optionsMutationObserver = DOM.createMutationObserver(mutations => {
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
	}

	open() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		if (!this.instance) {
			return;
		}
		(this.input as HTMLInputElement).focus();
	}

	//
	// Firefox sometimes fire blur several times in a row
	// observable at http://localhost:3000/#/samples/select/
	// when enable 'Disable Functionality', open that list and
	// then open 'Basic use' list.
	// Chrome - ok
	// IE 11 - ok
	// Edge ?
	//
	taskqueueRunning = false;

	handleBlur() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		if (this.taskqueueRunning) {
			return;
		}
		this.taskqueueRunning = true;
		this.taskQueue.queueTask(() => {
			this.log.debug("fire blur event");
			fireEvent(this.element, "blur");
			this.taskqueueRunning = false;
			this.labelElement.classList.remove("md-focused");
		});
	}

	handleFocus() {
		if (this.element.classList.contains("browser-default")) {
			return;
		}
		this.labelElement.classList.add("md-focused");
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		if (!this.input) {
			return;
		}
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.inputField, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		if (!this.input) {
			return;
		}
		for (let result of results) {
			if (!result.valid) {
				(result as any).target = this.input;
				if (!(this.input.hasAttribute("data-show-errortext") && this.input.getAttribute("data-show-errortext") === "false")) {
					renderer.addMessage(this.inputField, result);
				}
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
