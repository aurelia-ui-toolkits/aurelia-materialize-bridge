import { __decorate, __metadata } from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { MdSidenav } from "./sidenav";
let MdSidenavCollapse = class MdSidenavCollapse {
    constructor(element) {
        this.element = element;
        this.click = () => {
            if (this.ref.instance.isOpen) {
                this.ref.close();
            }
            else {
                this.ref.open();
            }
        };
    }
    attached() {
        this.element.addEventListener("click", this.click);
        if (this.ref) {
            this.element.setAttribute("data-target", this.ref.controlId);
        }
    }
    detached() {
        this.element.removeEventListener("click", this.click);
    }
};
__decorate([
    bindable,
    __metadata("design:type", MdSidenav)
], MdSidenavCollapse.prototype, "ref", void 0);
MdSidenavCollapse = __decorate([
    customAttribute("md-sidenav-collapse"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdSidenavCollapse);
export { MdSidenavCollapse };
//# sourceMappingURL=sidenav-collapse.js.map