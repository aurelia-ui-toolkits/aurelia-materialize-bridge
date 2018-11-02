import * as au from "../aurelia";

@au.customElement("validation-container")
export class ValidationContainer {
	constructor(private element: Element, private coloursService: au.MdColorsService) { }

	containerDiv: HTMLDivElement;

	@au.ato.bindable.booleanMd
	showSuccess: boolean;

	attached() {
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	mdUnrenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.containerDiv, result);
			}
		}
		renderer.removeValidationClasses(this.containerDiv);
	}

	mdRenderValidateResults = (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => {
		if (this.containerDiv) {
			for (let result of results) {
				if (!result.valid) {
					renderer.addMessage(this.containerDiv, result);
				}
			}
		}
		let valid = !results.find(x => !x.valid);
		if (!valid || this.showSuccess) {
			renderer.addValidationClasses(this.containerDiv, valid);
		}
	}
}
