import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdBox = class MdBox {
    constructor(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    attached() {
        this.attributeManager.addClasses("materialboxed");
        if (this.caption) {
            this.attributeManager.addAttributes({ "data-caption": this.caption });
        }
        let options = {
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
            onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
            onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
            onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
        };
        au.cleanOptions(options);
        this.instance = new M.Materialbox(this.element, options);
    }
    detached() {
        this.instance.destroy();
        this.attributeManager.removeAttributes("data-caption");
        this.attributeManager.removeClasses("materialboxed");
    }
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
export { MdBox };
//# sourceMappingURL=box.js.map