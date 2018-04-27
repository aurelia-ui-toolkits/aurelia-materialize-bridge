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
                function MdColors() {
                    this.mdErrorColor = "#F44336";
                    this.mdSuccessColor = "#26A69A";
                }
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdPrimaryColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdAccentColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdErrorColor", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdSuccessColor", void 0);
                MdColors = tslib_1.__decorate([
                    au.customElement("md-colors")
                ], MdColors);
                return MdColors;
            }());
            exports_1("MdColors", MdColors);
        }
    };
});
//# sourceMappingURL=md-colors.js.map