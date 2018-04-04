System.register(["tslib", "aurelia-framework", "aurelia-router"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_router_1, MdBreadcrumbs;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            }
        ],
        execute: function () {
            MdBreadcrumbs = /** @class */ (function () {
                function MdBreadcrumbs(element, aureliaRouter) {
                    this.element = element;
                    this.aureliaRouter = aureliaRouter;
                }
                MdBreadcrumbs.prototype.bind = function () {
                    if (!this.router) {
                        this.router = this.aureliaRouter;
                    }
                    this.childRouter = this.router;
                    var router = this.router;
                    while (router.parent) {
                        router = router.parent;
                    }
                    this.router = router;
                };
                MdBreadcrumbs.prototype.navigate = function (navigationInstruction) {
                    this.childRouter.navigateToRoute(navigationInstruction.config.name);
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", aurelia_router_1.Router)
                ], MdBreadcrumbs.prototype, "router", void 0);
                MdBreadcrumbs = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-breadcrumbs"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, aurelia_router_1.Router])
                ], MdBreadcrumbs);
                return MdBreadcrumbs;
            }());
            exports_1("MdBreadcrumbs", MdBreadcrumbs);
        }
    };
});
