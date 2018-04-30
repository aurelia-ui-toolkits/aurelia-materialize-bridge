import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdFooter = /** @class */ (function () {
    function MdFooter(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdFooter.prototype.bind = function () {
        this.attributeManager.addClasses("page-footer");
    };
    MdFooter.prototype.unbind = function () {
        this.attributeManager.removeClasses("page-footer");
    };
    MdFooter = tslib_1.__decorate([
        au.customAttribute("md-footer"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdFooter);
    return MdFooter;
}());
export { MdFooter };
//# sourceMappingURL=footer.js.map