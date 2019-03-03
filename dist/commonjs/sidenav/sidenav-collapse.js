"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var sidenav_1 = require("./sidenav");
var MdSidenavCollapse = /** @class */ (function () {
    function MdSidenavCollapse(element) {
        var _this = this;
        this.element = element;
        this.click = function () {
            if (_this.ref.instance.isOpen) {
                _this.ref.close();
            }
            else {
                _this.ref.open();
            }
        };
    }
    MdSidenavCollapse.prototype.attached = function () {
        this.element.addEventListener("click", this.click);
        if (this.ref) {
            this.element.setAttribute("data-target", this.ref.controlId);
        }
    };
    MdSidenavCollapse.prototype.detached = function () {
        this.element.removeEventListener("click", this.click);
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", sidenav_1.MdSidenav)
    ], MdSidenavCollapse.prototype, "ref", void 0);
    MdSidenavCollapse = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-sidenav-collapse"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenavCollapse);
    return MdSidenavCollapse;
}());
exports.MdSidenavCollapse = MdSidenavCollapse;
//# sourceMappingURL=sidenav-collapse.js.map