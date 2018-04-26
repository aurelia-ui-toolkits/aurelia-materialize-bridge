import * as tslib_1 from "tslib";
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
var MdRange = /** @class */ (function () {
    function MdRange() {
        this.mdReadonly = false;
        this.mdMin = 0;
        this.mdMax = 100;
        this.mdStep = 1;
        this.mdValue = 0;
    }
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRange.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdRange.prototype, "mdMin", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdRange.prototype, "mdMax", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdRange.prototype, "mdStep", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdRange.prototype, "mdValue", void 0);
    MdRange = tslib_1.__decorate([
        customElement("md-range"),
        autoinject
    ], MdRange);
    return MdRange;
}());
export { MdRange };
//# sourceMappingURL=range.js.map