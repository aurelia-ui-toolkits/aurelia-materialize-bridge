System.register(["tslib", "aurelia-templating", "aurelia-dependency-injection"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_templating_1, aurelia_dependency_injection_1, MdParallax;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }
        ],
        execute: function () {
            MdParallax = /** @class */ (function () {
                function MdParallax(element) {
                    this.element = element;
                }
                MdParallax.prototype.attached = function () {
                    $(this.element).parallax();
                };
                MdParallax.prototype.detached = function () {
                    // destroy handler not available
                };
                MdParallax = tslib_1.__decorate([
                    aurelia_templating_1.customAttribute("md-parallax"),
                    aurelia_dependency_injection_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdParallax);
                return MdParallax;
            }());
            exports_1("MdParallax", MdParallax);
        }
    };
});
