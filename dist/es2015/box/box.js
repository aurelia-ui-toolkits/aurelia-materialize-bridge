import * as tslib_1 from "tslib";
import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
var MdBox = /** @class */ (function () {
    function MdBox(element) {
        this.element = element;
        this.element = element;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdBox.prototype.attached = function () {
        this.attributeManager.addClasses("materialboxed");
        if (this.caption) {
            this.attributeManager.addAttributes({ "data-caption": this.caption });
        }
        // FIXME:0 throws "Uncaught TypeError: Cannot read property "css" of undefined", but so does the original
        $(this.element).materialbox();
    };
    MdBox.prototype.detached = function () {
        this.attributeManager.removeAttributes("data-caption");
        this.attributeManager.removeClasses("materialboxed");
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdBox.prototype, "caption", void 0);
    MdBox = tslib_1.__decorate([
        customAttribute("md-box"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdBox);
    return MdBox;
}());
export { MdBox };
