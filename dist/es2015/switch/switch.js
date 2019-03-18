import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdSwitch = class MdSwitch {
    constructor(element) {
        this.element = element;
        this.readonly = false;
        this.labelOff = "Off";
        this.labelOn = "On";
        this.handleChange = () => {
            this.checked = this.checkbox.checked;
            au.fireEvent(this.element, "blur");
        };
    }
    checkedChanged(newValue) {
        if (this.checkbox) {
            this.checkbox.checked = !!newValue;
        }
    }
    disabledChanged() {
        if (this.checkbox) {
            this.checkbox.disabled = this.disabled;
        }
    }
    attached() {
        this.checkbox.checked = this.checked;
        this.disabledChanged();
        this.checkbox.addEventListener("change", this.handleChange);
    }
    detached() {
        if (this.checkbox) {
            this.checkbox.removeEventListener("change", this.handleChange);
        }
    }
    blur() {
        au.fireEvent(this.element, "blur");
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", Boolean)
], MdSwitch.prototype, "checked", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSwitch.prototype, "disabled", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSwitch.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdSwitch.prototype, "labelOff", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdSwitch.prototype, "labelOn", void 0);
MdSwitch = tslib_1.__decorate([
    au.customElement("md-switch"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdSwitch);
export { MdSwitch };
//# sourceMappingURL=switch.js.map