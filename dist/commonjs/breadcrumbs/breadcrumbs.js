"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
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
exports.MdBreadcrumbs = MdBreadcrumbs;
//# sourceMappingURL=breadcrumbs.js.map