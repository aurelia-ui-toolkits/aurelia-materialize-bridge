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
                    this.element = element;
                    this.element = element;
                }
                MdSidenavCollapse.prototype.attached = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return tslib_1.__generator(this, function (_a) {
                            this.element.addEventListener("click", function () { return _this.click(); });
                            return [2 /*return*/];
                        });
                    });
                };
                MdSidenavCollapse.prototype.click = function () {
                    if (this.isOpen) {
                        this.ref.close();
                        this.isOpen = false;
                    }
                    else {
                        this.ref.open();
                        this.isOpen = true;
                    }
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
