define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdRange = /** @class */ (function () {
        function MdRange(element) {
            this.element = element;
            this.mdReadonly = false;
            this.mdMin = 0;
            this.mdMax = 100;
            this.mdStep = 1;
            this.mdValue = 0;
        }
        MdRange.prototype.attached = function () {
            this.instance = new M.Range(this.input);
        };
        MdRange.prototype.detached = function () {
            this.instance.destroy();
        };
        tslib_1.__decorate([
            au.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdRange.prototype, "mdReadonly", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdRange.prototype, "mdMin", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdRange.prototype, "mdMax", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdRange.prototype, "mdStep", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Number)
        ], MdRange.prototype, "mdValue", void 0);
        MdRange = tslib_1.__decorate([
            au.customElement("md-range"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdRange);
        return MdRange;
    }());
    exports.MdRange = MdRange;
});
//# sourceMappingURL=range.js.map