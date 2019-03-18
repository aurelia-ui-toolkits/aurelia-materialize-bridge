import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdRange = class MdRange {
    constructor(element) {
        this.element = element;
        this.readonly = false;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 0;
    }
    attached() {
        this.instance = new M.Range(this.input);
    }
    detached() {
        this.instance.destroy();
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdRange.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdRange.prototype, "min", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdRange.prototype, "max", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdRange.prototype, "step", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", Number)
], MdRange.prototype, "value", void 0);
MdRange = tslib_1.__decorate([
    au.customElement("md-range"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdRange);
export { MdRange };
//# sourceMappingURL=range.js.map