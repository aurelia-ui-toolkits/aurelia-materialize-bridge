import { ValidateResult, RenderInstruction } from "aurelia-validation";

export class MaterializeFormValidationRenderer {

	static className = "md-input-validation";
	static classNameFirst = "md-input-validation-first";

	pushElementResult(elementResults: Map<Element, ValidateResult[]>, element: Element, result: ValidateResult) {
		if (elementResults.has(element)) {
			elementResults.get(element).push(result);
		} else {
			elementResults.set(element, [result]);
		}
	}

	render(instruction: RenderInstruction) {
		let elementResultsToUnrender = new Map<Element, ValidateResult[]>();
		// group validation results to unrender by elements
		for (let { result, elements } of instruction.unrender) {
			for (let element of elements) {
				this.pushElementResult(elementResultsToUnrender, element, result);
			}
		}
		for (let [element, results] of elementResultsToUnrender) {
			if (element.mdUnrenderValidateResults) {
				element.mdUnrenderValidateResults(results, this);
			} else {
				this.defaultUnrenderValidateResults(element, results);
			}
		}

		// group validation results to render by elements
		let elementResultsToRender = new Map<Element, ValidateResult[]>();
		for (let { result, elements } of instruction.render) {
			for (let element of elements) {
				this.pushElementResult(elementResultsToRender, element, result);
			}
		}
		for (let [element, results] of elementResultsToRender) {
			if (element.mdRenderValidateResults) {
				element.mdRenderValidateResults(results, this);
			} else {
				this.defaultRenderValidateResults(element, results);
			}
		}
	}

	defaultUnrenderValidateResults(element: Element, results: ValidateResult[]) {
		if (element.tagName !== "INPUT") {
			return;
		}
		this.removeValidationClasses(element);
	}

	defaultRenderValidateResults(element: Element, results: ValidateResult[]) {
		if (element.tagName !== "INPUT") {
			return;
		}
		this.addValidationClasses(element, !results.find(x => !x.valid));
	}

	addMessage(element: Element, result: ValidateResult) {
		if (!element) {
			return;
		}

		let message = document.createElement("div");
		message.id = `md-input-validation-${result.id}`;
		message.textContent = result.message;
		message.className = MaterializeFormValidationRenderer.className;
		if (element.querySelectorAll("." + MaterializeFormValidationRenderer.className).length === 0) {
			message.className += " " + MaterializeFormValidationRenderer.classNameFirst;
		}
		message.style.opacity = "0";
		element.appendChild(message);
		// tslint:disable-next-line:no-unused-expression
		window.getComputedStyle(message).opacity;
		message.style.opacity = "1";
	}

	removeMessage(element: Element, result: ValidateResult) {
		if (!element) {
			return;
		}

		let message = element.querySelector(`#md-input-validation-${result.id}`);
		if (message) {
			element.removeChild(message);
		}
	}

	removeValidationClasses(input: Element) {
		if (input) {
			input.classList.remove("valid");
			input.classList.remove("invalid");
		}
	}

	addValidationClasses(input: Element, isValid: boolean) {
		if (!input) {
			return;
		}

		if (isValid) {
			input.classList.remove("invalid");
			input.classList.add("valid");
		} else {
			input.classList.remove("valid");
			input.classList.add("invalid");
		}
	}
}
