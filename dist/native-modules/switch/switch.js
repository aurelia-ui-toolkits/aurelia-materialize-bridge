import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdSwitch = /** @class */ (function () {
    function MdSwitch(element) {
        var _this = this;
        this.element = element;
        this.readonly = false;
        this.labelOff = "Off";
        this.labelOn = "On";
        this.handleChange = function () {
            _this.checked = _this.checkbox.checked;
            au.fireEvent(_this.element, "blur");
        };
    }
    MdSwitch.prototype.checkedChanged = function (newValue) {
        if (this.checkbox) {
            this.checkbox.checked = !!newValue;
        }
    };
    MdSwitch.prototype.disabledChanged = function () {
        if (this.checkbox) {
            this.checkbox.disabled = this.disabled;
        }
    };
    MdSwitch.prototype.attached = function () {
        this.checkbox.checked = this.checked;
        this.disabledChanged();
        this.checkbox.addEventListener("change", this.handleChange);
    };
    MdSwitch.prototype.detached = function () {
        if (this.checkbox) {
            this.checkbox.removeEventListener("change", this.handleChange);
        }
    };
    MdSwitch.prototype.blur = function () {
        au.fireEvent(this.element, "blur");
    };
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], MdSwitch.prototype, "checked", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdSwitch.prototype, "disabled", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdSwitch.prototype, "readonly", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdSwitch.prototype, "labelOff", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], MdSwitch.prototype, "labelOn", void 0);
    MdSwitch = __decorate([
        au.customElement("md-switch"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdSwitch);
    return MdSwitch;
}());
export { MdSwitch };
//# sourceMappingURL=switch.js.map