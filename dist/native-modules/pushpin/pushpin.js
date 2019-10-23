import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdPushpin = /** @class */ (function () {
    function MdPushpin(element) {
        this.element = element;
    }
    MdPushpin.prototype.attached = function () {
        var _this = this;
        var options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
            onPositionChange: function (position) { return au.fireMaterializeEvent(_this.element, "position-change", { position: position }); }
        };
        au.cleanOptions(options);
        this.instance = new M.Pushpin(this.element, options);
    };
    MdPushpin.prototype.detached = function () {
        this.instance.destroy();
    };
    __decorate([
        au.ato.bindable.numberMd,
        __metadata("design:type", Number)
    ], MdPushpin.prototype, "bottom", void 0);
    __decorate([
        au.ato.bindable.numberMd,
        __metadata("design:type", Number)
    ], MdPushpin.prototype, "offset", void 0);
    __decorate([
        au.ato.bindable.numberMd,
        __metadata("design:type", Number)
    ], MdPushpin.prototype, "top", void 0);
    MdPushpin = __decorate([
        au.customAttribute("md-pushpin"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdPushpin);
    return MdPushpin;
}());
export { MdPushpin };
//# sourceMappingURL=pushpin.js.map