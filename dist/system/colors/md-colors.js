System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdColors;
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
            MdColors = /** @class */ (function () {
                function MdColors(cs, bindingEngine) {
                    this.cs = cs;
                    this.bindingEngine = bindingEngine;
                    this.primaryColor = this.cs.primaryColor;
                    this.accentColor = this.cs.accentColor;
                    this.errorColor = this.cs.errorColor;
                    this.successColor = this.cs.successColor;
                    this.subscriptions = [];
                }
                MdColors.prototype.primaryColorChanged = function () {
                    this.cs.primaryColor = this.primaryColor;
                };
                MdColors.prototype.accentColorChanged = function () {
                    this.cs.accentColor = this.accentColor;
                };
                MdColors.prototype.errorColorChanged = function () {
                    this.cs.errorColor = this.errorColor;
                };
                MdColors.prototype.successColorChanged = function () {
                    this.cs.successColor = this.successColor;
                };
                MdColors.prototype.attached = function () {
                    var _this = this;
                    this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(function () { return _this.primaryColor = _this.cs.primaryColor; }));
                    this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "accentColor").subscribe(function () { return _this.accentColor = _this.cs.accentColor; }));
                    this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(function () { return _this.errorColor = _this.cs.errorColor; }));
                    this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(function () { return _this.successColor = _this.cs.successColor; }));
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
                ], MdColors.prototype, "accentColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "errorColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "successColor", void 0);
                MdColors = tslib_1.__decorate([
                    au.customElement("md-colors"),
                    tslib_1.__metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
                ], MdColors);
                return MdColors;
            }());
            exports_1("MdColors", MdColors);
        }
    };
});
//# sourceMappingURL=md-colors.js.map