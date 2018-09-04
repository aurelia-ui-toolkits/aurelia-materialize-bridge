"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdColors = /** @class */ (function () {
    function MdColors(cs, bindingEngine) {
        this.cs = cs;
        this.bindingEngine = bindingEngine;
        this.primaryColor = this.cs.primaryColor;
        this.primaryColorLight = this.cs.primaryColorLight;
        this.primaryColorDark = this.cs.primaryColorDark;
        this.secondaryColor = this.cs.secondaryColor;
        this.errorColor = this.cs.errorColor;
        this.successColor = this.cs.successColor;
        this.linkColor = this.cs.linkColor;
        this.subscriptions = [];
    }
    MdColors.prototype.primaryColorChanged = function () {
        this.cs.primaryColor = this.primaryColor;
        this.cs.updatePrimaryShades();
    };
    MdColors.prototype.secondaryColorChanged = function () {
        this.cs.secondaryColor = this.secondaryColor;
    };
    MdColors.prototype.errorColorChanged = function () {
        this.cs.errorColor = this.errorColor;
    };
    MdColors.prototype.successColorChanged = function () {
        this.cs.successColor = this.successColor;
    };
    MdColors.prototype.linkColorChanged = function () {
        this.cs.linkColor = this.linkColor;
    };
    MdColors.prototype.attached = function () {
        var _this = this;
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(function () { return _this.primaryColor = _this.cs.primaryColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorLight").subscribe(function () { return _this.primaryColorLight = _this.cs.primaryColorLight; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorDark").subscribe(function () { return _this.primaryColorDark = _this.cs.primaryColorDark; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "secondaryColor").subscribe(function () { return _this.secondaryColor = _this.cs.secondaryColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(function () { return _this.errorColor = _this.cs.errorColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(function () { return _this.successColor = _this.cs.successColor; }));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "linkColor").subscribe(function () { return _this.linkColor = _this.cs.linkColor; }));
        this.primaryColorLight = this.cs.primaryColorLight;
        this.primaryColorDark = this.cs.primaryColorDark;
    };
    MdColors.prototype.detached = function () {
        this.subscriptions.forEach(function (x) { return x.dispose(); });
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "primaryColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "secondaryColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "errorColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "successColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "linkColor", void 0);
    MdColors = tslib_1.__decorate([
        au.customElement("md-colors"),
        tslib_1.__metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
    ], MdColors);
    return MdColors;
}());
exports.MdColors = MdColors;
//# sourceMappingURL=md-colors.js.map