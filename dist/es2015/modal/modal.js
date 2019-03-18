import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdModal = class MdModal {
    constructor(element) {
        this.element = element;
        this.log = au.getLogger("md-modal");
        this.attributeManager = new au.AttributeManager(this.element);
    }
    fixedFooterChanged() {
        if (this.element) {
            this.element.classList.toggle("modal-fixed-footer", this.fixedFooter);
        }
    }
    attached() {
        const options = {
            opacity: this.opacity,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            preventScrolling: this.preventScrolling,
            dismissible: this.dismissible,
            startingTop: this.startingTop,
            endingTop: this.endingTop,
            onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
            onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
            onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
            onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
        };
        this.log.debug("modal options: ", options);
        au.cleanOptions(options);
        this.attributeManager.addClasses("modal");
        this.instance = new M.Modal(this.element, options);
    }
    detached() {
        this.instance.destroy();
        this.attributeManager.removeClasses("modal");
    }
    open() {
        this.instance.open();
    }
    close() {
        this.instance.close();
    }
};
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdModal.prototype, "opacity", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdModal.prototype, "inDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdModal.prototype, "outDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdModal.prototype, "preventScrolling", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdModal.prototype, "dismissible", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdModal.prototype, "startingTop", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdModal.prototype, "endingTop", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdModal.prototype, "fixedFooter", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdModal.prototype, "bottomSheet", void 0);
MdModal = tslib_1.__decorate([
    au.customAttribute("md-modal"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdModal);
export { MdModal };
//# sourceMappingURL=modal.js.map