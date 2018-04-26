import * as tslib_1 from "tslib";
import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdCollapsible = /** @class */ (function () {
    function MdCollapsible(element) {
        this.element = element;
        this.accordion = false;
        this.popout = false;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdCollapsible.prototype.attached = function () {
        this.attributeManager.addClasses("collapsible");
        if (getBooleanFromAttributeValue(this.popout)) {
            this.attributeManager.addClasses("popout");
        }
        this.refresh();
    };
    MdCollapsible.prototype.detached = function () {
        this.attributeManager.removeClasses(["collapsible", "popout"]);
        this.attributeManager.removeAttributes(["data-collapsible"]);
        $(this.element).collapsible("destroy");
    };
    MdCollapsible.prototype.refresh = function () {
        var accordion = getBooleanFromAttributeValue(this.accordion);
        var dataCollapsibleAttributeValue = accordion ? "accordion" : "expandable";
        this.attributeManager.addAttributes({ "data-collapsible": dataCollapsibleAttributeValue });
        $(this.element).collapsible({
            accordion: accordion,
            onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
            onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
        });
    };
    MdCollapsible.prototype.accordionChanged = function () {
        this.refresh();
    };
    MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function (handler) {
        return typeof (handler) === "function" ?
            function (targetElementJquery) {
                var targetElement = targetElementJquery[0];
                handler(targetElement);
            } : null;
    };
    MdCollapsible.prototype.open = function (index) {
        if (index === void 0) { index = 0; }
        $(this.element).collapsible("open", index);
    };
    MdCollapsible.prototype.close = function (index) {
        if (index === void 0) { index = 0; }
        $(this.element).collapsible("close", index);
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollapsible.prototype, "accordion", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollapsible.prototype, "popout", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdCollapsible.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdCollapsible.prototype, "onClose", void 0);
    MdCollapsible = tslib_1.__decorate([
        customAttribute("md-collapsible"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCollapsible);
    return MdCollapsible;
}());
export { MdCollapsible };
//# sourceMappingURL=collapsible.js.map