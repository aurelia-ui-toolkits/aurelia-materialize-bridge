import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdColorsLegacy = /** @class */ (function () {
    function MdColorsLegacy(cs, bindingEngine) {
        this.cs = cs;
        this.bindingEngine = bindingEngine;
        this.primaryColor = this.cs.primaryColor;
        this.accentColor = this.cs.secondaryColor;
        this.errorColor = this.cs.errorColor;
        this.successColor = this.cs.successColor;
        this.subscriptions = [];
    }
    MdColorsLegacy.prototype.primaryColorChanged = function () {
        this.cs.primaryColor = this.primaryColor;
    };
    MdColorsLegacy.prototype.accentColorChanged = function () {
        this.cs.secondaryColor = this.accentColor;
    };
    MdColorsLegacy.prototype.errorColorChanged = function () {
        this.cs.errorColor = this.errorColor;
    };
    MdColorsLegacy.prototype.successColorChanged = function () {
        this.cs.successColor = this.successColor;
    };
    MdColorsLegacy.prototype.attached = function () {
        var _this = this;
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(function () { return _this.primaryColor = _this.cs.primaryColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "accentColor").subscribe(function () { return _this.accentColor = _this.cs.secondaryColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(function () { return _this.errorColor = _this.cs.errorColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(function () { return _this.successColor = _this.cs.successColor; }));
    };
    MdColorsLegacy.prototype.detached = function () {
        this.subscriptions.forEach(function (x) { return x.dispose(); });
    };
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdColorsLegacy.prototype, "primaryColor", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdColorsLegacy.prototype, "accentColor", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdColorsLegacy.prototype, "errorColor", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdColorsLegacy.prototype, "successColor", void 0);
    MdColorsLegacy = __decorate([
        au.customElement("md-colors"),
        __metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
    ], MdColorsLegacy);
    return MdColorsLegacy;
}());
export { MdColorsLegacy };
//# sourceMappingURL=md-colors-legacy.js.map