import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdPushpin = class MdPushpin {
    constructor(element) {
        this.element = element;
    }
    attached() {
        let options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
            onPositionChange: position => au.fireMaterializeEvent(this.element, "position-change", { position })
        };
        au.cleanOptions(options);
        this.instance = new M.Pushpin(this.element, options);
    }
    detached() {
        this.instance.destroy();
    }
};
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdPushpin.prototype, "bottom", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdPushpin.prototype, "offset", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdPushpin.prototype, "top", void 0);
MdPushpin = tslib_1.__decorate([
    au.customAttribute("md-pushpin"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdPushpin);
export { MdPushpin };
//# sourceMappingURL=pushpin.js.map