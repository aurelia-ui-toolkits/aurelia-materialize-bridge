var MdCheckbox_1;
import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdCheckbox = MdCheckbox_1 = class MdCheckbox {
    constructor(element) {
        this.element = element;
        this.readonly = false;
        this.controlId = `md-checkbox-${MdCheckbox_1.id++}`;
    }
    disabledChanged(newValue) {
        if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
        }
    }
    readonlyChanged() {
        if (!this.checkbox) {
            return;
        }
        if (this.readonly) {
            this.checkbox.addEventListener("change", this.preventChange);
        }
        else {
            this.checkbox.removeEventListener("change", this.preventChange);
        }
    }
    attached() {
        this.attributeManager = new au.AttributeManager(this.checkbox);
        if (this.filledIn) {
            this.attributeManager.addClasses("filled-in");
        }
        if (this.checked === null) {
            this.checkbox.indeterminate = true;
        }
        else {
            this.checkbox.indeterminate = false;
        }
        if (this.disabled) {
            this.checkbox.disabled = true;
        }
        this.readonlyChanged();
    }
    detached() {
        this.attributeManager.removeClasses(["filled-in", "disabled"]);
    }
    // it is called with an element as this
    preventChange() {
        this.checked = !this.checked;
    }
};
MdCheckbox.id = 0;
__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdCheckbox.prototype, "checked", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdCheckbox.prototype, "disabled", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdCheckbox.prototype, "readonly", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdCheckbox.prototype, "filledIn", void 0);
__decorate([
    au.bindable,
    __metadata("design:type", Function)
], MdCheckbox.prototype, "matcher", void 0);
__decorate([
    au.bindable,
    __metadata("design:type", Object)
], MdCheckbox.prototype, "model", void 0);
MdCheckbox = MdCheckbox_1 = __decorate([
    au.customElement("md-checkbox"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdCheckbox);
export { MdCheckbox };
//# sourceMappingURL=checkbox.js.map