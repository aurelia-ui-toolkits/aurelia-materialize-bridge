System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdScrollSpy;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdScrollSpy = /** @class */ (function () {
                function MdScrollSpy(element) {
                    this.element = element;
                }
                MdScrollSpy.prototype.attached = function () {
                    $(this.target, this.element).scrollSpy();
                };
                MdScrollSpy.prototype.detached = function () {
                    // destroy handler not available
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdScrollSpy.prototype, "target", void 0);
                MdScrollSpy = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-scrollspy"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdScrollSpy);
                return MdScrollSpy;
            }());
            exports_1("MdScrollSpy", MdScrollSpy);
        }
    };
});
