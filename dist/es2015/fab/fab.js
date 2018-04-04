import * as tslib_1 from "tslib";
import { bindable, customElement, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdFab = /** @class */ (function () {
    function MdFab() {
        this.mdFixed = false;
        this.mdLarge = false;
    }
    MdFab.prototype.attached = function () {
        this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
        this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdFab.prototype, "mdFixed", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdFab.prototype, "mdLarge", void 0);
    MdFab = tslib_1.__decorate([
        customElement("md-fab"),
        autoinject
    ], MdFab);
    return MdFab;
}());
export { MdFab };
