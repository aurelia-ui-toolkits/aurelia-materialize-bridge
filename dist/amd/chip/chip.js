define(["require", "exports", "tslib", "aurelia-framework", "../common/attributes", "../common/events"], function (require, exports, tslib_1, aurelia_framework_1, attributes_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
