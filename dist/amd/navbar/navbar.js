define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "extended", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "fixed", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdNavbar.prototype, "autoHeight", void 0);
        MdNavbar = tslib_1.__decorate([
            au.customElement("md-navbar"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdNavbar);
        return MdNavbar;
    }());
    exports.MdNavbar = MdNavbar;
});
//# sourceMappingURL=navbar.js.map