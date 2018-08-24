System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdColorsLegacy;
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
            MdColorsLegacy = /** @class */ (function () {
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
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColorsLegacy.prototype, "primaryColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColorsLegacy.prototype, "accentColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColorsLegacy.prototype, "errorColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColorsLegacy.prototype, "successColor", void 0);
                MdColorsLegacy = tslib_1.__decorate([
                    au.customElement("md-colors"),
                    tslib_1.__metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
                ], MdColorsLegacy);
                return MdColorsLegacy;
            }());
            exports_1("MdColorsLegacy", MdColorsLegacy);
        }
    };
});
//# sourceMappingURL=md-colors-legacy.js.map