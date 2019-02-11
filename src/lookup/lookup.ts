import * as au from "../aurelia";
import { LookupState } from "./lookup-state";
import { ILookupOptionsFunctionParameter } from "./i-lookup-options-function-parameter";
import { DiscardablePromise, discard } from "../common/discardable-promise";

@au.customElement("md-lookup")
@au.autoinject
export class MdLookup {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.logger = au.getLogger("MdLookup");
		this.controlId = `md-lookup-${MdLookup.id++}`;
	}

	static searching = Symbol("searching");
	static error = Symbol("error");

	errorMessage: string;

	static id = 0;
	controlId: string;
	dropdown: HTMLElement;
	dropdownUl: HTMLElement;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	validationContainer: HTMLElement;
	logger: au.Logger;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	filter: string;
	searchPromise: DiscardablePromise<any[]>;
	suppressFilterChanged: boolean;
	async filterChanged() {
		this.logger.debug("filterChanged");
		if (!this.optionsFunction) {
			return;
		}
		if (this.suppressFilterChanged) {
			this.logger.debug("unsuppressed filter changed");
			this.suppressFilterChanged = false;
			return;
		}
		this.setValue(undefined);
		discard(this.searchPromise);
		this.options = [MdLookup.searching];
		try {
			this.searchPromise = new DiscardablePromise(this.getOptions({ filter: this.filter }));
			this.options = await this.searchPromise;
			this.fixDropdownSizeIfTooBig();
		}
		catch (e) {
			if (e !== DiscardablePromise.discarded) {
				this.options = [MdLookup.error, e.message];
			}
		}
	}
	setFilter(filter: string) {
		if (this.filter === filter) {
			return;
		}
		this.logger.debug("suppressed filter changed");
		this.suppressFilterChanged = true;
		this.filter = filter;
		this.taskQueue.queueTask(() => this.updateLabel());
	}

	@au.bindable
	label: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;
	suppressValueChanged: boolean;
	async valueChanged(newValue: any, oldValue: any) {
		this.logger.debug("valueChanged", newValue);
		if (this.suppressValueChanged) {
			this.logger.debug("unsuppressed value changed");
			this.suppressValueChanged = false;
			return;
		}
		await this.updateFilterBasedOnValue();
	}
	setValue(value: string) {
		if (this.value === value) {
			return;
		}
		this.logger.debug("suppressed value changed");
		this.suppressValueChanged = true;
		this.value = value;
	}

	@au.bindable
	optionsFunction: (p: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;
	getOptions: (p: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;

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

	@au.bindable
	preloadOptions: boolean;

	LookupState = LookupState; // for usage from the html template
	state: LookupState;

	bindingContext: object;

	@au.observable
	options: any[];
	optionsChanged() {
		this.logger.debug("optionsChanged", this.options);
		if (!this.options || !(this.options instanceof Array) || !this.options.length) {
			this.state = LookupState.noMatches;
		}
		else if (this.options[0] === MdLookup.searching) {
			this.state = LookupState.searching;
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

	async updateFilterBasedOnValue() {
		this.logger.debug("updateFilterBasedOnValue", this.value);
		if (this.value) {
			this.options = await this.getOptions({ value: this.value });
		}
		else {
			this.options = [];
		}
		if (this.options && this.options.length) {
			this.setFilter(this.getDisplayValue(this.options[0]));
		} else {
			this.setFilter(undefined);
		}
	}

	fixDropdownSizeIfTooBig() {
		this.taskQueue.queueTask(() => {
			if (!this.isOpen) {
				return;
			}

			// adjust dropdown top so it sits right below the input
			// doing it with CSS will not work if input margin is redefined
			let inputRect = this.input.getBoundingClientRect();
			this.dropdown.style.top = `${inputRect.height + 3}px`;

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

	blur() {
		this.close();
		au.fireEvent(this.element, "blur");
	}

	focus() {
		this.input.focus();
		au.fireEvent(this.element, "focus");
	}

	updateLabel() {
		au.updateLabel(this.input, this.labelElement);
	}

	async bind(bindingContext: object, overrideContext: object) {
		this.bindingContext = bindingContext;
		if (this.optionsFunction) {
			this.getOptions = this.optionsFunction.bind(this.bindingContext);
		}
		await this.updateFilterBasedOnValue();
		// restore initial value because it is set by updateFilterBasedOnValue
		this.suppressFilterChanged = false;
	}

	async attached() {
		this.logger.debug("attached");
		if (this.placeholder) {
			this.input.setAttribute("placeholder", this.placeholder);
		}
		// we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
		this.input.onselect = () => this.taskQueue.queueTask(() => this.open());
		this.input.onclick = () => this.taskQueue.queueTask(() => this.open());
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		if (this.preloadOptions) {
			this.options = await this.getOptions({ value: this.value, filter: this.filter });
		}
		this.updateLabel();
	}

	detached() {
		if (this.input) {
			this.input.onselect = null;
			this.input.onfocus = null;
			this.input.onblur = null;
		}
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
		// this.setFilter(this.getDisplayValue(option));
		// this.options = [option];
		this.close();
		au.fireEvent(this.element, "selected", { value: this.value });
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
