import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdCollapsible = /** @class */ (function () {
    function MdCollapsible(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdCollapsible.prototype.accordionChanged = function () {
        this.attached();
    };
    MdCollapsible.prototype.bind = function () {
        //
    };
    MdCollapsible.prototype.attached = function () {
        var _this = this;
        this.attributeManager.addClasses("collapsible");
        if (this.popout) {
            this.attributeManager.addClasses("popout");
        }
        var options = {
            accordion: this.accordion,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: function (el) { return au.fireMaterializeEvent(_this.element, "open-start", { el: el }); },
            onOpenEnd: function (el) { return au.fireMaterializeEvent(_this.element, "open-end", { el: el }); },
            onCloseStart: function (el) { return au.fireMaterializeEvent(_this.element, "close-start", { el: el }); },
            onCloseEnd: function (el) { return au.fireMaterializeEvent(_this.element, "close-end", { el: el }); }
        };
        au.cleanOptions(options);
        this.instance = new M.Collapsible(this.element, options);
    };
    MdCollapsible.prototype.detached = function () {
        this.attributeManager.removeClasses(["collapsible", "popout"]);
        this.instance.destroy();
    };
    MdCollapsible.prototype.open = function (index) {
        if (index === void 0) { index = 0; }
        this.instance.open(index);
    };
    MdCollapsible.prototype.close = function (index) {
        if (index === void 0) { index = 0; }
        this.instance.close(index);
    };
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdCollapsible.prototype, "accordion", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdCollapsible.prototype, "popout", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], MdCollapsible.prototype, "inDuration", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], MdCollapsible.prototype, "outDuration", void 0);
    MdCollapsible = __decorate([
        au.customAttribute("md-collapsible"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdCollapsible);
    return MdCollapsible;
}());
export { MdCollapsible };
//# sourceMappingURL=collapsible.js.map