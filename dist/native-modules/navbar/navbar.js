import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdNavbar = /** @class */ (function () {
    function MdNavbar(element) {
        this.element = element;
    }
    MdNavbar.prototype.attached = function () {
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
    };
    MdNavbar.prototype.detached = function () {
        if (this.fixed) {
            this.fixedAttributeManager.removeClasses("navbar-fixed");
        }
        if (this.autoHeight) {
            this.navAttributeManager.removeClasses("auto-height");
        }
        if (this.extended) {
            this.navAttributeManager.removeClasses("nav-extended");
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
    return MdNavbar;
}());
export { MdNavbar };
//# sourceMappingURL=navbar.js.map