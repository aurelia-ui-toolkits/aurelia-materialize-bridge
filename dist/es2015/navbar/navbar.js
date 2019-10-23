import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdNavbar = class MdNavbar {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.fixedAttributeManager = new au.AttributeManager(this.fixedAnchor);
        this.navAttributeManager = new au.AttributeManager(this.nav);
        if (this.fixed) {
            this.fixedAttributeManager.addClasses("navbar-fixed");
        }
        if (this.autoHeight) {
            this.navAttributeManager.addClasses("auto-height");
        }
        if (this.extended) {
            this.navAttributeManager.addClasses("nav-extended");
        }
    }
    detached() {
        if (this.fixed) {
            this.fixedAttributeManager.removeClasses("navbar-fixed");
        }
        if (this.autoHeight) {
            this.navAttributeManager.removeClasses("auto-height");
        }
        if (this.extended) {
            this.navAttributeManager.removeClasses("nav-extended");
        }
    }
};
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdNavbar.prototype, "extended", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdNavbar.prototype, "fixed", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdNavbar.prototype, "autoHeight", void 0);
MdNavbar = __decorate([
    au.customElement("md-navbar"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdNavbar);
export { MdNavbar };
//# sourceMappingURL=navbar.js.map