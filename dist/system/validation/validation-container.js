System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, ValidationContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            ValidationContainer = /** @class */ (function () {
                function ValidationContainer(element, coloursService) {
                    var _this = this;
                    this.element = element;
                    this.coloursService = coloursService;
                    this.validateResults = [];
                    this.mdUnrenderValidateResults = function (results, renderer) {
                        _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
                        _this.validationClass = undefined;
                    };
                    this.mdRenderValidateResults = function (results, renderer) {
                        var _a;
                        (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
                        var invalid = results.find(function (x) { return !x.valid; });
                        if (invalid || _this.showSuccess) {
                            _this.validationClass = invalid ? "invalid" : "valid";
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
            exports_1("ValidationContainer", ValidationContainer);
        }
    };
});
//# sourceMappingURL=validation-container.js.map