import { inject, nextId } from '@aurelia/kernel';
import { customElement, bindable, BindingMode, IScheduler } from '@aurelia/runtime';
import { updateLabel } from '../../../util';
import { fireEvent } from '../../../events';
import { template } from './md-input.html';
import { toBoolean } from '../../../bindable-interceptors';

@customElement({ name: "md-input", template })
@inject()
export class MdInput {
	public constructor(private element: HTMLElement, @IScheduler private scheduler: IScheduler) { }

	id: number = nextId('au$component');
	labelEl!: HTMLLabelElement;
	input!: HTMLInputElement;

	@bindable()
	label?: string;

	@bindable({ set: val => toBoolean(val) })
	blurOnEnter: boolean = false;

	@bindable({ set: val => toBoolean(val) })
	disabled: boolean = false;

	@bindable({ set: val => toBoolean(val) })
	readonly: boolean = false;

	@bindable({ mode: BindingMode.oneTime })
	placeholder?: string;

	@bindable({ mode: BindingMode.oneTime, set: val => toBoolean(val) })
	textArea: boolean = false;

	@bindable({ mode: BindingMode.oneTime })
	type: string = 'text';

	@bindable({ mode: BindingMode.oneTime })
	step: string = '';

	@bindable({ mode: BindingMode.oneTime, set: val => toBoolean(val) })
	validate: boolean = false;

	@bindable({ mode: BindingMode.oneTime, set: val => toBoolean(val) })
	showErrortext: boolean = true;

	@bindable({ mode: BindingMode.oneTime, set: val => toBoolean(val) })
	inline: boolean = false;

	@bindable({ mode: BindingMode.oneTime })
	updateTrigger: string[] = ['input', 'change'];

	@bindable()
	validateError?: string;

	@bindable()
	validateSuccess?: string;

	@bindable({ mode: BindingMode.twoWay })
	value?: string;
	valueChanged() {
		if (this.input === document.activeElement) {
			return;
		}
		this.scheduler.queueTask(() => this.updateLabel());
	}

	@bindable({ mode: BindingMode.oneTime })
	min: string = '';

	@bindable({ mode: BindingMode.oneTime })
	max: string = '';

	@bindable({ mode: BindingMode.oneTime })
	name: string = '';

	@bindable({ mode: BindingMode.oneTime })
	maxlength?: number;

	@bindable({ mode: BindingMode.oneTime })
	autocomplete: string = '';

	// validateResults: au.ValidateResult[] = [];
	// validationClass: string;

	// bind() {
	// 	// this suppresses initial changed handler calls
	// }

	beforeAttach() {
		if (this.input === undefined) {
			return;
		}
		this.input.setAttribute('type', this.type);
		if (this.validate) {
			this.input.classList.add('validate');
		}
		if (this.placeholder !== undefined) {
			this.input.setAttribute('placeholder', this.placeholder);
		}
		if (this.autocomplete !== undefined) {
			this.input.setAttribute('autocomplete', this.autocomplete);
		}
		if (this.maxlength !== undefined) {
			this.input.setAttribute('maxlength', this.maxlength.toString());
		}
		this.updateLabel();
		this.attachEventHandlers();
		// this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		// this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	afterDetach() {
		this.detachEventHandlers();
		// this.element.mdUnrenderValidateResults = undefined;
		// this.element.mdRenderValidateResults = undefined;
	}

	updateLabel() {
		updateLabel(this.input, this.labelEl);
		if (this.textArea) {
			M.textareaAutoResize(this.input);
		}
	}

	blur() {
		fireEvent(this.element, 'blur');
	}

	focus() {
		this.input.focus();
		fireEvent(this.element, 'focus');
	}

	attachEventHandlers() {
		if (this.blurOnEnter) {
			this.element.addEventListener('keyup', this.blurOnEnterHandler);
		}
	}

	detachEventHandlers() {
		if (this.blurOnEnter) {
			this.element.removeEventListener('keyup', this.blurOnEnterHandler);
		}
	}

	blurOnEnterHandler = (e: KeyboardEvent) => {
		if (e.keyCode && e.keyCode === 13) {
			this.input.blur();
		}
	}

	// mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
	// 	this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
	// 	this.validationClass = undefined;
	// }

	// mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
	// 	if (this.showErrortext) {
	// 		this.validateResults.push(...results.filter(x => !x.valid));
	// 	}
	// 	this.validationClass = results.find(x => !x.valid) ? "invalid" : "valid";
	// }
}
