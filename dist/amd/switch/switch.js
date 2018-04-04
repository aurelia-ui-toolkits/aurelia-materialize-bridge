define(["require", "exports", "tslib", "aurelia-framework", "../common/attributes", "../common/events"], function (require, exports, tslib_1, aurelia_framework_1, attributes_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.checkbox.checked = attributes_1.getBooleanFromAttributeValue(this.mdChecked);
            if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                this.checkbox.disabled = true;
            }
            this.checkbox.addEventListener("change", this.handleChange);
            this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
        };
        MdSwitch.prototype.detached = function () {
            this.checkbox.removeEventListener("change", this.handleChange);
        };
        MdSwitch.prototype.handleChange = function () {
            this.mdChecked = this.checkbox.checked;
            events_1.fireEvent(this.element, "blur");
        };
        MdSwitch.prototype.blur = function () {
            events_1.fireEvent(this.element, "blur");
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Object)
        ], MdSwitch.prototype, "mdChecked", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdSwitch.prototype, "mdDisabled", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdSwitch.prototype, "mdReadonly", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdSwitch.prototype, "mdLabelOff", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdSwitch.prototype, "mdLabelOn", void 0);
        MdSwitch = tslib_1.__decorate([
            aurelia_framework_1.customElement("md-switch"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdSwitch);
        return MdSwitch;
    }());
    exports.MdSwitch = MdSwitch;
});
