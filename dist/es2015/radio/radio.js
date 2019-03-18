import * as tslib_1 from "tslib";
var MdRadio_1;
import * as au from "../aurelia";
let MdRadio = MdRadio_1 = class MdRadio {
    constructor(element) {
        this.element = element;
        this.disabled = false;
        this.readonly = false;
        this.gap = false;
        this.name = "";
        this.value = "";
        this.controlId = `md-radio-${MdRadio_1.id++}`;
    }
    disabledChanged(newValue) {
        if (this.radio) {
            this.radio.disabled = newValue;
        }
    }
    attached() {
        this.attributeManager = new au.AttributeManager(this.radio);
        if (this.gap) {
            this.attributeManager.addClasses("with-gap");
        }
        if (this.disabled) {
            this.radio.disabled = true;
        }
    }
    detached() {
        this.attributeManager.removeClasses(["with-gap", "disabled"]);
    }
};
MdRadio.id = 0;
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", Object)
], MdRadio.prototype, "checked", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdRadio.prototype, "disabled", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdRadio.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdRadio.prototype, "gap", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", Object)
], MdRadio.prototype, "model", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdRadio.prototype, "name", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdRadio.prototype, "value", void 0);
MdRadio = MdRadio_1 = tslib_1.__decorate([
    au.customElement("md-radio"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdRadio);
export { MdRadio };
//# sourceMappingURL=radio.js.map