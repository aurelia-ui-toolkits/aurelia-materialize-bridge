import * as au from "../aurelia";
import { LookupState } from "./lookup-state";

@au.customElement("md-lookup")
@au.autoinject
export class MdLookup {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.logger = au.getLogger("MdLookup");
	}

	static searching = Symbol("searching");
	static error = Symbol("error");

	errorMessage: string;
	searchingMessage: string;

	dropdown: HTMLElement;
	dropdownUl: HTMLElement;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	validationContainer: HTMLElement;
	logger: au.Logger;

	@au.observable
	filter: string;
	suppressFilterChanged: boolean;
	filterChanged() {
		if (this.suppressFilterChanged) {
			this.logger.debug("unsuppressed filter changed");
			this.suppressFilterChanged = false;
			return;
		}
		au.fireEvent(this.element, "filter-changed", this.filter);
		this.setValue(undefined);
	}
	setFilter(filter: string) {
		if (this.filter === filter) {
			return;
		}
		this.logger.debug("suppressed filter changed", filter);
		this.suppressFilterChanged = true;
		this.filter = filter;
	}

	@au.bindable
	label: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;
	suppressValueChanged: boolean;
	async valueChanged(newValue: any, oldValue: any) {
		if (this.suppressValueChanged) {
			this.logger.debug("unsuppressed value changed");
			this.suppressValueChanged = false;
			return;
		}
		this.logger.debug("valueChanged", newValue);
		this.updateFilterBasedOnValue();
	}
	setValue(value: string) {
		if (this.value === value) {
			return;
		}
		this.logger.debug("suppressed value changed", value);
		this.suppressValueChanged = true;
		this.value = value;
	}

	@au.bindable
	displayFieldName: ((option: any) => string) | string;

	@au.bindable
	valueFieldName: ((option: any) => any) | string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	readonly: boolean;

	@au.bindable
	placeholder: string = "Start Typing To Search";

	@au.ato.bindable.numberMd
	debounce: number = 850;

	LookupState = LookupState; // for usage from the html template
	state: LookupState;

	@au.bindable
	options: any[];
	optionsChanged() {
		this.logger.debug("optionsChanged", this.options);
		if (!this.options || !(this.options instanceof Array) || !this.options.length) {
			this.state = LookupState.noMatches;
		}
		else if (this.options[0] === MdLookup.searching) {
			this.state = LookupState.searching;
			this.searchingMessage = this.options.length > 1 ? this.options[1] : "Searching...";
		}
		else if (this.options[0] === MdLookup.error) {
			this.state = LookupState.error;
			this.errorMessage = this.options.length > 1 ? this.options[1] : "Error occurred";
		}
		else {
			this.state = LookupState.optionsVisible;
		}
	}

	isOpen: boolean;

	updateFilterBasedOnValue() {
		this.logger.debug("updateFilterBasedOnValue", this.value);
		this.setFilter(this.getDisplayValue(this.value));
	}

	fixDropdownSizeIfTooBig() {
		this.taskQueue.queueTask(() => {
			if (!this.isOpen) {
				return;
			}
			const rect = this.dropdown.getBoundingClientRect();
			let availableSpace = window.innerHeight - rect.top + document.body.scrollTop - 5;
			if (this.dropdownUl.offsetHeight > availableSpace) {
				this.dropdown.style.height = `${availableSpace}px`;
			}
			else {
				this.dropdown.style.height = "auto";
			}
		});
	}

	open() {
		if (!this.readonly) {
			this.logger.debug("open");
			this.isOpen = true;
			this.fixDropdownSizeIfTooBig();
		}
	}

	close() {
		this.logger.debug("close");
		this.isOpen = false;
	}

	bind(bindingContext: object, overrideContext: object) {
		if (this.value) {
			// use taskQueue to delay the update until all fields are bound
			this.taskQueue.queueTask(() => this.updateFilterBasedOnValue());
		}
		this.optionsChanged();
	}

	attached() {
		this.logger.debug("attached");
		// we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
		this.input.onselect = () => this.taskQueue.queueTask(() => this.open());
		this.input.onclick = () => this.taskQueue.queueTask(() => this.open());
		this.input.onblur = () => this.close();
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.labelElement.classList.add(this.filter || this.placeholder ? "active" : "inactive");
	}

	detached() {
		this.input.onselect = null;
		this.input.onfocus = null;
		this.input.onblur = null;
		au.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	select(option: any) {
		if (this.valueFieldName) {
			if (this.valueFieldName instanceof Function) {
				this.value = this.valueFieldName(option);
			}
			else {
				this.value = option[this.valueFieldName];
			}
		} else {
			this.value = option;
		}
		this.close();
		au.fireEvent(this.element, "selected", this.value);
	}

	getDisplayValue(option: any): any {
		if (option === null || option === undefined) {
			return null;
		}
		if (!this.displayFieldName) {
			return option;
		}
		else if (this.displayFieldName instanceof Function) {
			return this.displayFieldName(option);
		}
		else {
			return option[this.displayFieldName];
		}
	}

	mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.validationContainer, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.addMessage(this.validationContainer, result);
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
