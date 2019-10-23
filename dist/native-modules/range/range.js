import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdRange = /** @class */ (function () {
    function MdRange(element) {
        this.element = element;
        this.readonly = false;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 0;
    }
    MdRange.prototype.attached = function () {
        this.instance = new M.Range(this.input);
    };
    MdRange.prototype.detached = function () {
        this.instance.destroy();
    };
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdRange.prototype, "readonly", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], MdRange.prototype, "min", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], MdRange.prototype, "max", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], MdRange.prototype, "step", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", Number)
    ], MdRange.prototype, "value", void 0);
    MdRange = __decorate([
        au.customElement("md-range"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdRange);
    return MdRange;
}());
export { MdRange };
//# sourceMappingURL=range.js.map