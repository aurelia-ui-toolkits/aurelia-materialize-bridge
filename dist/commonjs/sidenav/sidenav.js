"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributeManager_1 = require("../common/attributeManager");
var aurelia_typed_observable_plugin_1 = require("aurelia-typed-observable-plugin");
var MdSidenav = /** @class */ (function () {
    function MdSidenav(element) {
        this.element = element;
        this.mdFixed = false;
        this.controlId = "md-sidenav-" + MdSidenav_1.id++;
    }
    MdSidenav_1 = MdSidenav;
    MdSidenav.prototype.mdFixedChanged = function (newValue) {
        if (!this.attributeManager) {
            return;
        }
        if (newValue) {
            this.attributeManager.addClasses(MdSidenav_1.fixedClass);
        }
        else {
            this.attributeManager.removeClasses(MdSidenav_1.fixedClass);
        }
    };
    MdSidenav.prototype.attached = function () {
        this.attributeManager = new attributeManager_1.AttributeManager(this.sidenav);
        if (this.mdFixed) {
            this.attributeManager.addClasses(MdSidenav_1.fixedClass);
        }
        this.instance = new M.Sidenav(this.sidenav, this.options);
    };
    MdSidenav.prototype.open = function () {
        if (this.instance) {
            this.instance.open();
        }
    };
    MdSidenav.prototype.close = function () {
        if (this.instance) {
            this.instance.close();
        }
    };
    MdSidenav.prototype.detached = function () {
        this.attributeManager.removeClasses([MdSidenav_1.fixedClass]);
        if (this.instance) {
            this.instance.destroy();
        }
    };
    MdSidenav.fixedClass = "sidenav-fixed";
    MdSidenav.id = 0;
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSidenav.prototype, "options", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdSidenav.prototype, "mdFixed", void 0);
    MdSidenav = MdSidenav_1 = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-sidenav"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenav);
    return MdSidenav;
    var MdSidenav_1;
}());
exports.MdSidenav = MdSidenav;
//# sourceMappingURL=sidenav.js.map