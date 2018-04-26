import * as tslib_1 from "tslib";
import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdBadge = /** @class */ (function () {
    function MdBadge(element) {
        this.element = element;
        this.isNew = false;
        this.caption = null;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdBadge.prototype.isNewChanged = function (newValue) {
        if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("new");
        }
        else {
            this.attributeManager.removeClasses("new");
        }
    };
    MdBadge.prototype.captionChanged = function (newValue) {
        if (newValue !== null) {
            this.attributeManager.addAttributes({ "data-badge-caption": newValue });
        }
        else {
            this.attributeManager.removeAttributes(["data-badge-caption"]);
        }
    };
    MdBadge.prototype.attached = function () {
        var classes = ["badge"];
        if (getBooleanFromAttributeValue(this.isNew)) {
            classes.push("new");
        }
        if (this.caption !== null) {
            this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
        }
        this.attributeManager.addClasses(classes);
    };
    MdBadge.prototype.detached = function () {
        this.attributeManager.removeClasses(["badge", "new"]);
        this.attributeManager.removeAttributes(["data-badge-caption"]);
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdBadge.prototype, "isNew", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdBadge.prototype, "caption", void 0);
    MdBadge = tslib_1.__decorate([
        customAttribute("md-badge"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdBadge);
    return MdBadge;
}());
export { MdBadge };
//# sourceMappingURL=badge.js.map