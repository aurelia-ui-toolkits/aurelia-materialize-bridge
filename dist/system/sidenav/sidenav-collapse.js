System.register(["tslib", "aurelia-framework", "./sidenav"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, sidenav_1, MdSidenavCollapse;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            }
        ],
        execute: function () {
            MdSidenavCollapse = /** @class */ (function () {
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
                    this.element = element;
                }
                MdSidenavCollapse.prototype.attached = function () {
                    this.element.addEventListener("click", this.click);
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
            exports_1("MdSidenavCollapse", MdSidenavCollapse);
        }
    };
});
//# sourceMappingURL=sidenav-collapse.js.map