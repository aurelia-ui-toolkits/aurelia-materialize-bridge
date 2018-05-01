import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdBadge = /** @class */ (function () {
    function MdBadge(element) {
        this.element = element;
        this.isNew = false;
        this.caption = null;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdBadge.prototype.isNewChanged = function () {
        if (this.isNew) {
            this.attributeManager.addClasses("new");
        }
        else {
            this.attributeManager.removeClasses("new");
        }
    };
    MdBadge.prototype.captionChanged = function () {
        if (this.caption !== null) {
            this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
        }
        else {
            this.attributeManager.removeAttributes(["data-badge-caption"]);
        }
    };
    MdBadge.prototype.attached = function () {
        this.element.classList.add("badge");
    };
    MdBadge.prototype.detached = function () {
        this.attributeManager.removeClasses(["badge", "new"]);
        this.attributeManager.removeAttributes(["data-badge-caption"]);
    };
    tslib_1.__decorate([
        au.ato.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdBadge.prototype, "isNew", void 0);
    tslib_1.__decorate([
        au.ato.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdBadge.prototype, "caption", void 0);
    MdBadge = tslib_1.__decorate([
        au.customAttribute("md-badge"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdBadge);
    return MdBadge;
}());
export { MdBadge };
//# sourceMappingURL=badge.js.map