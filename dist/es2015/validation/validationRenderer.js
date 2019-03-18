export class MaterializeFormValidationRenderer {
    pushElementResult(elementResults, element, result) {
        if (elementResults.has(element)) {
            elementResults.get(element).push(result);
        }
        else {
            elementResults.set(element, [result]);
        }
    }
    render(instruction) {
        let elementResultsToUnrender = new Map();
        // group validation results to unrender by elements
        for (let { result, elements } of instruction.unrender) {
            for (let element of elements) {
                this.pushElementResult(elementResultsToUnrender, element, result);
            }
        }
        for (let [element, results] of elementResultsToUnrender) {
            if (element.mdUnrenderValidateResults) {
                element.mdUnrenderValidateResults(results, this);
            }
            else {
                this.defaultUnrenderValidateResults(element, results);
            }
        }
        // group validation results to render by elements
        let elementResultsToRender = new Map();
        for (let { result, elements } of instruction.render) {
            for (let element of elements) {
                this.pushElementResult(elementResultsToRender, element, result);
            }
        }
        for (let [element, results] of elementResultsToRender) {
            if (element.mdRenderValidateResults) {
                element.mdRenderValidateResults(results, this);
            }
            else {
                this.defaultRenderValidateResults(element, results);
            }
        }
    }
    defaultUnrenderValidateResults(element, results) {
        if (element.tagName !== "INPUT") {
            return;
        }
        this.removeValidationClasses(element);
    }
    defaultRenderValidateResults(element, results) {
        if (element.tagName !== "INPUT") {
            return;
        }
        this.addValidationClasses(element, !results.find(x => !x.valid));
    }
    addMessage(element, result) {
        if (!element) {
            return;
        }
        let message = document.createElement("span");
        message.id = `md-input-validation-${result.id}`;
        message.setAttribute(`data-${result.valid ? "success" : "error"}`, result.message);
        message.className = MaterializeFormValidationRenderer.validationMessageClass;
        element.appendChild(message);
    }
    removeMessage(element, result) {
        if (!element) {
            return;
        }
        let message = element.querySelector(`#md-input-validation-${result.id}`);
        if (message) {
            element.removeChild(message);
        }
    }
    removeValidationClasses(input) {
        if (input) {
            input.classList.remove("valid");
            input.classList.remove("invalid");
        }
    }
    addValidationClasses(input, isValid) {
        if (!input) {
            return;
        }
        if (isValid) {
            input.classList.remove("invalid");
            input.classList.add("valid");
        }
        else {
            input.classList.remove("valid");
            input.classList.add("invalid");
        }
    }
    static removeValidation(validationContainer, input) {
        if (validationContainer) {
            let validationMessages = Array.from(validationContainer.querySelectorAll("." + MaterializeFormValidationRenderer.validationMessageClass));
            validationMessages.forEach(x => x.remove());
        }
        if (input) {
            input.classList.remove("valid");
            input.classList.remove("invalid");
        }
    }
}
MaterializeFormValidationRenderer.validationMessageClass = "helper-text";
//# sourceMappingURL=validationRenderer.js.map