System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MaterializeFormValidationRenderer;
    return {
        setters: [],
        execute: function () {
            MaterializeFormValidationRenderer = class MaterializeFormValidationRenderer {
                constructor() {
                    this.className = "md-input-validation";
                    this.classNameFirst = "md-input-validation-first";
                }
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
                    let message = document.createElement("div");
                    message.id = `md-input-validation-${result.id}`;
                    message.textContent = result.message;
                    message.className = this.className;
                    if (element.querySelectorAll("." + this.className).length === 0) {
                        message.className += " " + this.classNameFirst;
                    }
                    message.style.opacity = "0";
                    element.appendChild(message, element.nextSibling);
                    // tslint:disable-next-line:no-unused-expression
                    window.getComputedStyle(message).opacity; // why we need this?
                    message.style.opacity = "1";
                }
                removeMessage(element, result) {
                    let message = element.querySelector(`#md-input-validation-${result.id}`);
                    if (message) {
                        element.removeChild(message);
                    }
                }
                removeValidationClasses(input) {
                    input.classList.remove("valid");
                    input.classList.remove("invalid");
                }
                addValidationClasses(input, isValid) {
                    if (isValid) {
                        input.classList.remove("invalid");
                        input.classList.add("valid");
                    }
                    else {
                        input.classList.remove("valid");
                        input.classList.add("invalid");
                    }
                }
            };
            exports_1("MaterializeFormValidationRenderer", MaterializeFormValidationRenderer);
        }
    };
});
