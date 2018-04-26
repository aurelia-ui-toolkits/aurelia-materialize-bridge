define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdRange = /** @class */ (function () {
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
    exports.MdRange = MdRange;
});
//# sourceMappingURL=range.js.map