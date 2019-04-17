import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdTooltip = class MdTooltip {
    constructor(element) {
        this.element = element;
        this.position = "bottom";
        this.delay = 50;
        this.html = "";
    }
    textChanged() {
        this.initTooltip();
    }
    attached() {
        this.initTooltip();
    }
    detached() {
        if (this.instance) {
            this.instance.destroy();
        }
    }
    initTooltip() {
        if (this.html) {
            this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.html, position: this.position });
        }
        else if (this.instance) {
            this.instance.destroy();
        }
    }
};
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdTooltip.prototype, "position", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", Number)
], MdTooltip.prototype, "delay", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdTooltip.prototype, "html", void 0);
MdTooltip = tslib_1.__decorate([
    au.customAttribute("md-tooltip"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdTooltip);
export { MdTooltip };
//# sourceMappingURL=tooltip.js.map