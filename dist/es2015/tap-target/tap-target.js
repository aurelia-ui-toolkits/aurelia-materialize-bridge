import * as tslib_1 from "tslib";
var MdTapTarget_1;
import * as au from "../aurelia";
let MdTapTarget = MdTapTarget_1 = class MdTapTarget {
    constructor(element) {
        this.element = element;
        this.log = au.getLogger("md-tap-target");
    }
    bind() {
        if (!this.ref) {
            throw new Error("md-tap-target needs a referenced element");
        }
        else {
            let id = this.ref.getAttribute("id");
            if (!id) {
                id = `md-tap-target-${MdTapTarget_1.controlId++}`;
                this.ref.setAttribute("id", id);
            }
            this.element.setAttribute("data-target", id);
        }
    }
    attached() {
        this.instance = new M.TapTarget(this.element, {
            onOpen: () => au.fireMaterializeEvent(this.element, "on-open"),
            onClose: () => au.fireMaterializeEvent(this.element, "on-close")
        });
    }
    detached() {
        this.instance.destroy();
    }
    open() {
        this.instance.open();
    }
    close() {
        this.instance.close();
    }
};
MdTapTarget.controlId = 0;
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", HTMLElement)
], MdTapTarget.prototype, "ref", void 0);
MdTapTarget = MdTapTarget_1 = tslib_1.__decorate([
    au.customElement("md-tap-target"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdTapTarget);
export { MdTapTarget };
//# sourceMappingURL=tap-target.js.map