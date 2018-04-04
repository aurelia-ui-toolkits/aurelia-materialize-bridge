import * as tslib_1 from "tslib";
import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
var MdCharCounter = /** @class */ (function () {
    function MdCharCounter(element) {
        this.element = element;
        this.length = 120;
        this.element = element;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdCharCounter.prototype.attached = function () {
        var _this = this;
        if (typeof this.length === "string") {
            this.length = parseInt(this.length, 10);
        }
        // attach to input and textarea elements explicitly, so this counter can be
        // used on containers (or custom elements like md-input)
        var tagName = this.element.tagName.toUpperCase();
        if (tagName === "INPUT" || tagName === "TEXTAREA") {
            this.attributeManager.addAttributes({ "data-length": this.length });
            $(this.element).characterCounter();
        }
        else {
            var elem = $(this.element).find("input,textarea");
            elem.each(function (i, el) { $(el).attr("data-length", _this.length); });
            elem.characterCounter();
        }
    };
    MdCharCounter.prototype.detached = function () {
        this.attributeManager.removeAttributes(["data-length"]);
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCharCounter.prototype, "length", void 0);
    MdCharCounter = tslib_1.__decorate([
        customAttribute("md-char-counter"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCharCounter);
    return MdCharCounter;
}());
export { MdCharCounter };
