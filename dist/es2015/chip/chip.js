import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdChip = /** @class */ (function () {
    function MdChip(element) {
        this.element = element;
        this.hasClose = false;
    }
    MdChip.prototype.closeChip = function () {
        this.element.parentElement.removeChild(this.element);
        au.fireEvent(this.element, "close");
    };
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdChip.prototype, "hasClose", void 0);
    MdChip = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdChip);
    return MdChip;
}());
export { MdChip };
//# sourceMappingURL=chip.js.map