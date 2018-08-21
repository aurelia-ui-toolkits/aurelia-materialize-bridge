System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdBreadcrumbs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
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
                    au.bindable,
                    tslib_1.__metadata("design:type", au.Router)
                ], MdBreadcrumbs.prototype, "router", void 0);
                MdBreadcrumbs = tslib_1.__decorate([
                    au.customElement("md-breadcrumbs"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, au.Router])
                ], MdBreadcrumbs);
                return MdBreadcrumbs;
            }());
            exports_1("MdBreadcrumbs", MdBreadcrumbs);
        }
    };
});
//# sourceMappingURL=breadcrumbs.js.map