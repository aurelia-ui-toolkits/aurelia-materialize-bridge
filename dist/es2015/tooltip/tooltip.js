import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdTooltip = /** @class */ (function () {
    function MdTooltip(element) {
        this.element = element;
        this.position = "bottom";
        this.delay = 50;
        this.html = false;
        this.text = "";
        this.attributeManager = new AttributeManager(this.element);
    }
    MdTooltip.prototype.bind = function () {
        this.html = getBooleanFromAttributeValue(this.html);
    };
    MdTooltip.prototype.attached = function () {
        this.attributeManager.addClasses("tooltipped");
        this.attributeManager.addAttributes({ "data-position": this.position, "data-tooltip": this.text });
        this.initTooltip();
    };
    MdTooltip.prototype.detached = function () {
        $(this.element).tooltip("remove");
        this.attributeManager.removeClasses("tooltipped");
        this.attributeManager.removeAttributes(["data-position", "data-tooltip"]);
    };
    MdTooltip.prototype.textChanged = function () {
        this.attributeManager.addAttributes({ "data-tooltip": this.text });
        this.initTooltip();
    };
    MdTooltip.prototype.initTooltip = function () {
        $(this.element).tooltip("remove");
        $(this.element).tooltip({
            delay: parseInt(this.delay.toString(), 10),
            html: this.html
        });
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "position", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTooltip.prototype, "delay", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTooltip.prototype, "html", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "text", void 0);
    MdTooltip = tslib_1.__decorate([
        customAttribute("md-tooltip"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdTooltip);
    return MdTooltip;
}());
export { MdTooltip };
