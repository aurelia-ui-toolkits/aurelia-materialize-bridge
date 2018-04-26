import * as tslib_1 from "tslib";
import { customElement, autoinject, bindingMode } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { bindable } from "aurelia-typed-observable-plugin";
var MdNavbar = /** @class */ (function () {
    function MdNavbar(element) {
        this.element = element;
    }
    MdNavbar.prototype.attached = function () {
        this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
        this.navAttributeManager = new AttributeManager(this.nav);
        if (this.mdFixed) {
            this.fixedAttributeManager.addClasses("navbar-fixed");
        }
        if (this.mdAutoHeight) {
            this.navAttributeManager.addClasses("md-auto-height");
        }
        if (this.mdExtended) {
            this.navAttributeManager.addClasses("nav-extended");
        }
    };
    MdNavbar.prototype.detached = function () {
        if (this.mdFixed) {
            this.fixedAttributeManager.removeClasses("navbar-fixed");
        }
        if (this.mdAutoHeight) {
            this.navAttributeManager.removeClasses("md-auto-height");
        }
        if (this.mdExtended) {
            this.navAttributeManager.removeClasses("nav-extended");
        }
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdNavbar.prototype, "mdExtended", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdNavbar.prototype, "mdFixed", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdNavbar.prototype, "mdAutoHeight", void 0);
    MdNavbar = tslib_1.__decorate([
        customElement("md-navbar"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdNavbar);
    return MdNavbar;
}());
export { MdNavbar };
//# sourceMappingURL=navbar.js.map