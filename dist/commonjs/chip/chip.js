"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
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
exports.MdChip = MdChip;
//# sourceMappingURL=chip.js.map