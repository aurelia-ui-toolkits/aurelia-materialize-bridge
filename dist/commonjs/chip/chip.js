"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
var events_1 = require("../common/events");
var MdChip = /** @class */ (function () {
    function MdChip(element) {
        this.element = element;
        this.mdClose = false;
    }
    MdChip.prototype.attached = function () {
        this.mdClose = attributes_1.getBooleanFromAttributeValue(this.mdClose);
    };
    MdChip.prototype.close = function () {
        this.element.parentElement.removeChild(this.element);
        events_1.fireEvent(this.element, "close");
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdChip.prototype, "mdClose", void 0);
    MdChip = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdChip);
    return MdChip;
}());
exports.MdChip = MdChip;
//# sourceMappingURL=chip.js.map