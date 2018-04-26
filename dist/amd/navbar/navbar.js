define(["require", "exports", "tslib", "aurelia-framework", "../common/attributeManager", "aurelia-typed-observable-plugin"], function (require, exports, tslib_1, aurelia_framework_1, attributeManager_1, aurelia_typed_observable_plugin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdNavbar = /** @class */ (function () {
        function MdNavbar(element) {
            this.element = element;
        }
        MdNavbar.prototype.attached = function () {
            this.fixedAttributeManager = new attributeManager_1.AttributeManager(this.fixedAnchor);
            this.navAttributeManager = new attributeManager_1.AttributeManager(this.nav);
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
            aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "mdExtended", void 0);
        tslib_1.__decorate([
            aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "mdFixed", void 0);
        tslib_1.__decorate([
            aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "mdAutoHeight", void 0);
        MdNavbar = tslib_1.__decorate([
            aurelia_framework_1.customElement("md-navbar"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdNavbar);
        return MdNavbar;
    }());
    exports.MdNavbar = MdNavbar;
});
//# sourceMappingURL=navbar.js.map