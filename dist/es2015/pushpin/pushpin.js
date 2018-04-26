import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
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
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPushpin.prototype, "bottom", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPushpin.prototype, "offset", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPushpin.prototype, "top", void 0);
    MdPushpin = tslib_1.__decorate([
        customAttribute("md-pushpin"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPushpin);
    return MdPushpin;
}());
export { MdPushpin };
//# sourceMappingURL=pushpin.js.map