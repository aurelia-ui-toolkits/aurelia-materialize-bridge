define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdPushpin = /** @class */ (function () {
        function MdPushpin(element) {
            this.element = element;
            this.bottom = Infinity;
            this.offset = 0;
            this.top = 0;
        }
        MdPushpin.prototype.attached = function () {
            $(this.element).pushpin({
                bottom: (this.bottom === Infinity ? Infinity : parseInt(this.bottom.toString(), 10)),
                offset: parseInt(this.offset.toString(), 10),
                top: parseInt(this.top.toString(), 10)
            });
        };
        MdPushpin.prototype.detached = function () {
            // destroy handler not available
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdPushpin.prototype, "bottom", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdPushpin.prototype, "offset", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdPushpin.prototype, "top", void 0);
        MdPushpin = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-pushpin"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdPushpin);
        return MdPushpin;
    }());
    exports.MdPushpin = MdPushpin;
});
