define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaterializeFormValidationRenderer = /** @class */ (function () {
        function MaterializeFormValidationRenderer() {
        }
        MaterializeFormValidationRenderer.prototype.pushElementResult = function (elementResults, element, result) {
            if (elementResults.has(element)) {
                elementResults.get(element).push(result);
            }
            else {
                elementResults.set(element, [result]);
            }
        };
        MaterializeFormValidationRenderer.prototype.render = function (instruction) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f;
            var elementResultsToUnrender = new Map();
            try {
                // group validation results to unrender by elements
                for (var _g = tslib_1.__values(instruction.unrender), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _j = _h.value, result = _j.result, elements = _j.elements;
                    try {
                        for (var elements_1 = tslib_1.__values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                            var element = elements_1_1.value;
                            this.pushElementResult(elementResultsToUnrender, element, result);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (elements_1_1 && !elements_1_1.done && (_b = elements_1.return)) _b.call(elements_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var elementResultsToUnrender_1 = tslib_1.__values(elementResultsToUnrender), elementResultsToUnrender_1_1 = elementResultsToUnrender_1.next(); !elementResultsToUnrender_1_1.done; elementResultsToUnrender_1_1 = elementResultsToUnrender_1.next()) {
                    var _k = tslib_1.__read(elementResultsToUnrender_1_1.value, 2), element = _k[0], results = _k[1];
                    if (element.mdUnrenderValidateResults) {
                        element.mdUnrenderValidateResults(results, this);
                    }
                    else {
                        this.defaultUnrenderValidateResults(element, results);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (elementResultsToUnrender_1_1 && !elementResultsToUnrender_1_1.done && (_c = elementResultsToUnrender_1.return)) _c.call(elementResultsToUnrender_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // group validation results to render by elements
            var elementResultsToRender = new Map();
            try {
                for (var _l = tslib_1.__values(instruction.render), _m = _l.next(); !_m.done; _m = _l.next()) {
                    var _o = _m.value, result = _o.result, elements = _o.elements;
                    try {
                        for (var elements_2 = tslib_1.__values(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                            var element = elements_2_1.value;
                            this.pushElementResult(elementResultsToRender, element, result);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (elements_2_1 && !elements_2_1.done && (_e = elements_2.return)) _e.call(elements_2);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                }
                finally { if (e_4) throw e_4.error; }
            }
            try {
                for (var elementResultsToRender_1 = tslib_1.__values(elementResultsToRender), elementResultsToRender_1_1 = elementResultsToRender_1.next(); !elementResultsToRender_1_1.done; elementResultsToRender_1_1 = elementResultsToRender_1.next()) {
                    var _p = tslib_1.__read(elementResultsToRender_1_1.value, 2), element = _p[0], results = _p[1];
                    if (element.mdRenderValidateResults) {
                        element.mdRenderValidateResults(results, this);
                    }
                    else {
                        this.defaultRenderValidateResults(element, results);
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (elementResultsToRender_1_1 && !elementResultsToRender_1_1.done && (_f = elementResultsToRender_1.return)) _f.call(elementResultsToRender_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        MaterializeFormValidationRenderer.prototype.defaultUnrenderValidateResults = function (element, results) {
            if (element.tagName !== "INPUT") {
                return;
            }
            this.removeValidationClasses(element);
        };
        MaterializeFormValidationRenderer.prototype.defaultRenderValidateResults = function (element, results) {
            if (element.tagName !== "INPUT") {
                return;
            }
            this.addValidationClasses(element, !results.find(function (x) { return !x.valid; }));
        };
        MaterializeFormValidationRenderer.prototype.addMessage = function (element, result) {
            if (!element) {
                return;
            }
            var message = document.createElement("span");
            message.id = "md-input-validation-" + result.id;
            message.setAttribute("data-" + (result.valid ? "success" : "error"), result.message);
            message.className = MaterializeFormValidationRenderer.validationMessageClass;
            element.appendChild(message);
        };
        MaterializeFormValidationRenderer.prototype.removeMessage = function (element, result) {
            if (!element) {
                return;
            }
            var message = element.querySelector("#md-input-validation-" + result.id);
            if (message) {
                element.removeChild(message);
            }
        };
        MaterializeFormValidationRenderer.prototype.removeValidationClasses = function (input) {
            if (input) {
                input.classList.remove("valid");
                input.classList.remove("invalid");
            }
        };
        MaterializeFormValidationRenderer.prototype.addValidationClasses = function (input, isValid) {
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
        };
        MaterializeFormValidationRenderer.removeValidation = function (validationContainer, input) {
            if (validationContainer) {
                var validationMessages = Array.from(validationContainer.querySelectorAll("." + MaterializeFormValidationRenderer.validationMessageClass));
                validationMessages.forEach(function (x) { return x.remove(); });
            }
            if (input) {
                input.classList.remove("valid");
                input.classList.remove("invalid");
            }
        };
        MaterializeFormValidationRenderer.validationMessageClass = "helper-text";
        return MaterializeFormValidationRenderer;
    }());
    exports.MaterializeFormValidationRenderer = MaterializeFormValidationRenderer;
});
//# sourceMappingURL=validationRenderer.js.map