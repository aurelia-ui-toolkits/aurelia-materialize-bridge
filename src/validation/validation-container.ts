import * as au from "../aurelia";

@au.customElement("validation-container")
export class ValidationContainer {
	constructor(private element: Element, private coloursService: au.MdColorsService) { }

	@au.ato.bindable.booleanMd
	showSuccess: boolean;

	validateResults: au.ValidateResult[] = [];
	validationClass: string;

	attached() {
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
		this.validationClass = undefined;
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		this.validateResults.push(...results.filter(x => !x.valid));
		let invalid = results.find(x => !x.valid);
		if (invalid || this.showSuccess) {
			this.validationClass = invalid ? "invalid" : "valid";
		}
	}
}
