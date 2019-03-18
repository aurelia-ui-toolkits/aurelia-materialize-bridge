import * as tslib_1 from "tslib";
import * as au from "../aurelia";
// taken from: https://github.com/heruan/aurelia-breadcrumbs
let MdBreadcrumbs = class MdBreadcrumbs {
    constructor(element, aureliaRouter) {
        this.element = element;
        this.aureliaRouter = aureliaRouter;
    }
    bind() {
        if (!this.router) {
            this.router = this.aureliaRouter;
        }
        this.childRouter = this.router;
        let router = this.router;
        while (router.parent) {
            router = router.parent;
        }
        this.router = router;
    }
    navigate(navigationInstruction) {
        this.childRouter.navigateToRoute(navigationInstruction.config.name);
    }
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
export { MdBreadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map