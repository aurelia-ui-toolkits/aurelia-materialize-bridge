import * as tslib_1 from "tslib";
var MdDropdownElement_1;
import * as au from "../aurelia";
let MdDropdownElement = MdDropdownElement_1 = class MdDropdownElement {
    constructor(element) {
        this.element = element;
        this.container = null;
        this.controlId = `md-dropdown-${MdDropdownElement_1.id++}`;
    }
    attached() {
        let options = {
            alignment: this.alignment,
            autoTrigger: this.autoTrigger,
            constrainWidth: this.constrainWidth,
            container: this.container,
            coverTrigger: this.coverTrigger,
            closeOnClick: this.closeOnClick,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
            onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
            onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
            onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
        };
        au.cleanOptions(options);
        this.instance = new M.Dropdown(this.element, options);
    }
    detached() {
        if (this.instance) {
            this.instance.destroy();
        }
    }
    open() {
        if (this.instance) {
            this.instance.open();
        }
    }
    close() {
        if (this.instance) {
            this.instance.close();
        }
    }
    recalculateDimensions() {
        if (this.instance) {
            this.instance.recalculateDimensions();
        }
    }
};
MdDropdownElement.id = 0;
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdDropdownElement.prototype, "alignment", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdownElement.prototype, "autoTrigger", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdownElement.prototype, "constrainWidth", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Element)
], MdDropdownElement.prototype, "container", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdownElement.prototype, "coverTrigger", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdownElement.prototype, "closeOnClick", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdownElement.prototype, "hover", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdDropdownElement.prototype, "title", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdDropdownElement.prototype, "inDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdDropdownElement.prototype, "outDuration", void 0);
MdDropdownElement = MdDropdownElement_1 = tslib_1.__decorate([
    au.customElement("md-dropdown"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdDropdownElement);
export { MdDropdownElement };
//# sourceMappingURL=dropdown-element.js.map