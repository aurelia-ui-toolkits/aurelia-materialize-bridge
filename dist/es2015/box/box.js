import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdBox = /** @class */ (function () {
    function MdBox(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdBox.prototype.attached = function () {
        var _this = this;
        this.attributeManager.addClasses("materialboxed");
        if (this.caption) {
            this.attributeManager.addAttributes({ "data-caption": this.caption });
        }
        var options = {
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: function () { return au.fireMaterializeEvent(_this.element, "open-start"); },
            onOpenEnd: function () { return au.fireMaterializeEvent(_this.element, "open-end"); },
            onCloseStart: function () { return au.fireMaterializeEvent(_this.element, "close-start"); },
            onCloseEnd: function () { return au.fireMaterializeEvent(_this.element, "close-end"); }
        };
        au.cleanOptions(options);
        this.instance = new M.Materialbox(this.element, options);
    };
    MdBox.prototype.detached = function () {
        this.instance.destroy();
        this.attributeManager.removeAttributes("data-caption");
        this.attributeManager.removeClasses("materialboxed");
    };
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdBox.prototype, "caption", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdBox.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdBox.prototype, "outDuration", void 0);
    MdBox = tslib_1.__decorate([
        au.customAttribute("md-box"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdBox);
    return MdBox;
}());
export { MdBox };
//# sourceMappingURL=box.js.map