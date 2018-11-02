"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var ValidationContainer = /** @class */ (function () {
    function ValidationContainer(element, coloursService) {
        var _this = this;
        this.element = element;
        this.coloursService = coloursService;
        this.mdUnrenderValidateResults = function (results, renderer) {
            var e_1, _a;
            try {
                for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (!result.valid) {
                        renderer.removeMessage(_this.containerDiv, result);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            renderer.removeValidationClasses(_this.containerDiv);
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var e_2, _a;
            if (_this.containerDiv) {
                try {
                    for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (!result.valid) {
                            renderer.addMessage(_this.containerDiv, result);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            var valid = !results.find(function (x) { return !x.valid; });
            if (!valid || _this.showSuccess) {
                renderer.addValidationClasses(_this.containerDiv, valid);
            }
        };
    }
    ValidationContainer.prototype.attached = function () {
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    };
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], ValidationContainer.prototype, "showSuccess", void 0);
    ValidationContainer = tslib_1.__decorate([
        au.customElement("validation-container"),
        tslib_1.__metadata("design:paramtypes", [Element, au.MdColorsService])
    ], ValidationContainer);
    return ValidationContainer;
}());
exports.ValidationContainer = ValidationContainer;
//# sourceMappingURL=validation-container.js.map