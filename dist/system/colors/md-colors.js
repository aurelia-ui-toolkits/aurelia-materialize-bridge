System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdColors;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdColors = /** @class */ (function () {
                function MdColors() {
                    this.mdErrorColor = "#F44336";
                    this.mdSuccessColor = "#26a69a";
                }
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdPrimaryColor", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdAccentColor", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdErrorColor", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdColors.prototype, "mdSuccessColor", void 0);
                MdColors = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-colors")
                ], MdColors);
                return MdColors;
            }());
            exports_1("MdColors", MdColors);
        }
    };
});
