import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdPrefix = /** @class */ (function () {
    function MdPrefix(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdPrefix.prototype.bind = function () {
        this.attributeManager.addClasses("prefix");
    };
    MdPrefix.prototype.unbind = function () {
        this.attributeManager.removeClasses("prefix");
    };
    MdPrefix = tslib_1.__decorate([
        au.customAttribute("md-prefix"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPrefix);
    return MdPrefix;
}());
export { MdPrefix };
//# sourceMappingURL=input-prefix.js.map