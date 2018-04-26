import * as tslib_1 from "tslib";
import { autoinject, bindable } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";
var MdChip = /** @class */ (function () {
    function MdChip(element) {
        this.element = element;
        this.mdClose = false;
    }
    MdChip.prototype.attached = function () {
        this.mdClose = getBooleanFromAttributeValue(this.mdClose);
    };
    MdChip.prototype.close = function () {
        this.element.parentElement.removeChild(this.element);
        fireEvent(this.element, "close");
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdChip.prototype, "mdClose", void 0);
    MdChip = tslib_1.__decorate([
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdChip);
    return MdChip;
}());
export { MdChip };
//# sourceMappingURL=chip.js.map