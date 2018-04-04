import * as tslib_1 from "tslib";
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";
var MdSwitch = /** @class */ (function () {
    function MdSwitch(element) {
        this.element = element;
        this.mdReadonly = false;
        this.mdLabelOff = "Off";
        this.mdLabelOn = "On";
        this.handleChange = this.handleChange.bind(this);
    }
    MdSwitch.prototype.mdCheckedChanged = function (newValue) {
        if (this.checkbox) {
            this.checkbox.checked = !!newValue;
        }
    };
    MdSwitch.prototype.mdDisabledChanged = function (newValue) {
        if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
        }
    };
    MdSwitch.prototype.attached = function () {
        this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
        if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
        }
        this.checkbox.addEventListener("change", this.handleChange);
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    };
    MdSwitch.prototype.detached = function () {
        this.checkbox.removeEventListener("change", this.handleChange);
    };
    MdSwitch.prototype.handleChange = function () {
        this.mdChecked = this.checkbox.checked;
        fireEvent(this.element, "blur");
    };
    MdSwitch.prototype.blur = function () {
        fireEvent(this.element, "blur");
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdSwitch.prototype, "mdChecked", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSwitch.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSwitch.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdSwitch.prototype, "mdLabelOff", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdSwitch.prototype, "mdLabelOn", void 0);
    MdSwitch = tslib_1.__decorate([
        customElement("md-switch"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSwitch);
    return MdSwitch;
}());
export { MdSwitch };
