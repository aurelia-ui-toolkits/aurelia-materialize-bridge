import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdChip = class MdChip {
    constructor(element) {
        this.element = element;
        this.hasClose = false;
    }
    closeChip() {
        this.element.parentElement.removeChild(this.element);
        au.fireEvent(this.element, "close");
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdChip.prototype, "hasClose", void 0);
MdChip = tslib_1.__decorate([
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdChip);
export { MdChip };
//# sourceMappingURL=chip.js.map