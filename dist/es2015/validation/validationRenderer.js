import * as tslib_1 from "tslib";
var MaterializeFormValidationRenderer = /** @class */ (function () {
    function MaterializeFormValidationRenderer() {
        this.className = "md-input-validation";
        this.classNameFirst = "md-input-validation-first";
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
        var elementResultsToUnrender = new Map();
        try {
            // group validation results to unrender by elements
            for (var _a = tslib_1.__values(instruction.unrender), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = _b.value, result = _c.result, elements = _c.elements;
                try {
                    for (var elements_1 = tslib_1.__values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                        var element = elements_1_1.value;
                        this.pushElementResult(elementResultsToUnrender, element, result);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (elements_1_1 && !elements_1_1.done && (_d = elements_1.return)) _d.call(elements_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var elementResultsToUnrender_1 = tslib_1.__values(elementResultsToUnrender), elementResultsToUnrender_1_1 = elementResultsToUnrender_1.next(); !elementResultsToUnrender_1_1.done; elementResultsToUnrender_1_1 = elementResultsToUnrender_1.next()) {
                var _f = tslib_1.__read(elementResultsToUnrender_1_1.value, 2), element = _f[0], results = _f[1];
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
                if (elementResultsToUnrender_1_1 && !elementResultsToUnrender_1_1.done && (_g = elementResultsToUnrender_1.return)) _g.call(elementResultsToUnrender_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // group validation results to render by elements
        var elementResultsToRender = new Map();
        try {
            for (var _h = tslib_1.__values(instruction.render), _j = _h.next(); !_j.done; _j = _h.next()) {
                var _k = _j.value, result = _k.result, elements = _k.elements;
                try {
                    for (var elements_2 = tslib_1.__values(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                        var element = elements_2_1.value;
                        this.pushElementResult(elementResultsToRender, element, result);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (elements_2_1 && !elements_2_1.done && (_l = elements_2.return)) _l.call(elements_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_m = _h.return)) _m.call(_h);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var elementResultsToRender_1 = tslib_1.__values(elementResultsToRender), elementResultsToRender_1_1 = elementResultsToRender_1.next(); !elementResultsToRender_1_1.done; elementResultsToRender_1_1 = elementResultsToRender_1.next()) {
                var _o = tslib_1.__read(elementResultsToRender_1_1.value, 2), element = _o[0], results = _o[1];
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
                if (elementResultsToRender_1_1 && !elementResultsToRender_1_1.done && (_p = elementResultsToRender_1.return)) _p.call(elementResultsToRender_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var e_2, _e, e_1, _d, e_3, _g, e_5, _m, e_4, _l, e_6, _p;
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
        var message = document.createElement("div");
        message.id = "md-input-validation-" + result.id;
        message.textContent = result.message;
        message.className = this.className;
        if (element.querySelectorAll("." + this.className).length === 0) {
            message.className += " " + this.classNameFirst;
        }
        message.style.opacity = "0";
        element.appendChild(message);
        // tslint:disable-next-line:no-unused-expression
        window.getComputedStyle(message).opacity;
        message.style.opacity = "1";
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
    return MaterializeFormValidationRenderer;
}());
export { MaterializeFormValidationRenderer };
//# sourceMappingURL=validationRenderer.js.map