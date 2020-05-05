define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationContainer = /** @class */ (function () {
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
            this.validateResults = [];
            this.validationClass = undefined;
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
});
//# sourceMappingURL=validation-container.js.map