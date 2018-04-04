import * as tslib_1 from "tslib";
import { customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
var MdPrefix = /** @class */ (function () {
    function MdPrefix(element) {
        this.element = element;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdPrefix.prototype.bind = function () {
        this.attributeManager.addClasses("prefix");
    };
    MdPrefix.prototype.unbind = function () {
        this.attributeManager.removeClasses("prefix");
    };
    MdPrefix = tslib_1.__decorate([
        customAttribute("md-prefix"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPrefix);
    return MdPrefix;
}());
export { MdPrefix };
