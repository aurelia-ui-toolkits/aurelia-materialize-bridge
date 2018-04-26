import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
var MdScrollfireTarget = /** @class */ (function () {
    function MdScrollfireTarget() {
        this.callback = null;
        this.offset = 0;
    }
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdScrollfireTarget.prototype, "callback", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Number)
    ], MdScrollfireTarget.prototype, "offset", void 0);
    MdScrollfireTarget = tslib_1.__decorate([
        customAttribute("md-scrollfire-target"),
        autoinject
    ], MdScrollfireTarget);
    return MdScrollfireTarget;
}());
export { MdScrollfireTarget };
//# sourceMappingURL=scrollfire-target.js.map