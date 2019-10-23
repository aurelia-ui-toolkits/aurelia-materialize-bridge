import { __decorate, __metadata, __read, __spread } from "tslib";
import * as au from "../aurelia";
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
            (_a = _this.validateResults).push.apply(_a, __spread(results.filter(function (x) { return !x.valid; })));
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
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], ValidationContainer.prototype, "showSuccess", void 0);
    ValidationContainer = __decorate([
        au.customElement("validation-container"),
        __metadata("design:paramtypes", [Element, au.MdColorsService])
    ], ValidationContainer);
    return ValidationContainer;
}());
export { ValidationContainer };
//# sourceMappingURL=validation-container.js.map