System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdRange;
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
            MdRange = /** @class */ (function () {
                function MdRange() {
                    this.mdReadonly = false;
                    this.mdMin = 0;
                    this.mdMax = 100;
                    this.mdStep = 1;
                    this.mdValue = 0;
                }
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdRange.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdRange.prototype, "mdMin", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdRange.prototype, "mdMax", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdRange.prototype, "mdStep", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdRange.prototype, "mdValue", void 0);
                MdRange = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-range"),
                    aurelia_framework_1.autoinject
                ], MdRange);
                return MdRange;
            }());
            exports_1("MdRange", MdRange);
        }
    };
});
//# sourceMappingURL=range.js.map