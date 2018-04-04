"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
var attributeManager_1 = require("../common/attributeManager");
var MdNavbar = /** @class */ (function () {
    function MdNavbar(element) {
        this.element = element;
    }
    MdNavbar.prototype.attached = function () {
        this.fixedAttributeManager = new attributeManager_1.AttributeManager(this.fixedAnchor);
        this.navAttributeManager = new attributeManager_1.AttributeManager(this.nav);
        if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.addClasses("navbar-fixed");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.addClasses("md-auto-height");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
            this.navAttributeManager.addClasses("nav-extended");
        }
    };
    MdNavbar.prototype.detached = function () {
        if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.removeClasses("navbar-fixed");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.removeClasses("md-auto-height");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
            this.navAttributeManager.removeClasses("nav-extended");
        }
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdNavbar.prototype, "mdExtended", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdNavbar.prototype, "mdFixed", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdNavbar.prototype, "mdAutoHeight", void 0);
    MdNavbar = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-navbar"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdNavbar);
    return MdNavbar;
}());
exports.MdNavbar = MdNavbar;
