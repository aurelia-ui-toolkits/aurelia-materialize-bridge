import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdCollapsible = class MdCollapsible {
    constructor(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    accordionChanged() {
        this.attached();
    }
    bind() {
        //
    }
    attached() {
        this.attributeManager.addClasses("collapsible");
        if (this.popout) {
            this.attributeManager.addClasses("popout");
        }
        let options = {
            accordion: this.accordion,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: el => au.fireMaterializeEvent(this.element, "open-start", { el }),
            onOpenEnd: el => au.fireMaterializeEvent(this.element, "open-end", { el }),
            onCloseStart: el => au.fireMaterializeEvent(this.element, "close-start", { el }),
            onCloseEnd: el => au.fireMaterializeEvent(this.element, "close-end", { el })
        };
        au.cleanOptions(options);
        this.instance = new M.Collapsible(this.element, options);
    }
    detached() {
        this.attributeManager.removeClasses(["collapsible", "popout"]);
        this.instance.destroy();
    }
    open(index = 0) {
        this.instance.open(index);
    }
    close(index = 0) {
        this.instance.close(index);
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdCollapsible.prototype, "accordion", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdCollapsible.prototype, "popout", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCollapsible.prototype, "inDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCollapsible.prototype, "outDuration", void 0);
MdCollapsible = tslib_1.__decorate([
    au.customAttribute("md-collapsible"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdCollapsible);
export { MdCollapsible };
//# sourceMappingURL=collapsible.js.map