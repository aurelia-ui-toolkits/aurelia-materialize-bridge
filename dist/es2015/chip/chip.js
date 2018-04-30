import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdChip = /** @class */ (function () {
    function MdChip(element) {
        this.element = element;
        this.mdClose = false;
    }
    MdChip.prototype.close = function () {
        this.element.parentElement.removeChild(this.element);
        au.fireEvent(this.element, "close");
    };
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdChip.prototype, "mdClose", void 0);
    MdChip = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdChip);
    return MdChip;
}());
export { MdChip };
//# sourceMappingURL=chip.js.map