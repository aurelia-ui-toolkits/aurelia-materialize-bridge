define(["require", "exports", "tslib", "aurelia-framework", "./sidenav"], function (require, exports, tslib_1, aurelia_framework_1, sidenav_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=sidenav-collapse.js.map