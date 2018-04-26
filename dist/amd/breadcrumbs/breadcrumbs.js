define(["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // taken from: https://github.com/heruan/aurelia-breadcrumbs
    var MdBreadcrumbs = /** @class */ (function () {
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
    exports.MdBreadcrumbs = MdBreadcrumbs;
});
//# sourceMappingURL=breadcrumbs.js.map