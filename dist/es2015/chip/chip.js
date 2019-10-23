import { __decorate, __metadata } from "tslib";
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
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdChip.prototype, "hasClose", void 0);
MdChip = __decorate([
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdChip);
export { MdChip };
//# sourceMappingURL=chip.js.map