import * as tslib_1 from "tslib";
import { autoinject, bindable, customElement } from "aurelia-framework";
import { Router } from "aurelia-router";
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
        bindable,
        tslib_1.__metadata("design:type", Router)
    ], MdBreadcrumbs.prototype, "router", void 0);
    MdBreadcrumbs = tslib_1.__decorate([
        customElement("md-breadcrumbs"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, Router])
    ], MdBreadcrumbs);
    return MdBreadcrumbs;
}());
export { MdBreadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map