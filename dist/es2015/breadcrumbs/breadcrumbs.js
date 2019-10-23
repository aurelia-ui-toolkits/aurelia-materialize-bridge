import { __decorate, __metadata } from "tslib";
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
__decorate([
    au.bindable,
    __metadata("design:type", au.Router)
], MdBreadcrumbs.prototype, "router", void 0);
MdBreadcrumbs = __decorate([
    au.customElement("md-breadcrumbs"),
    au.autoinject,
    __metadata("design:paramtypes", [Element, au.Router])
], MdBreadcrumbs);
export { MdBreadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map