var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributes", "../common/events"], function (require, exports, aurelia_framework_1, attributes_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdSwitch = class MdSwitch {
        constructor(element) {
            this.element = element;
            this.mdReadonly = false;
            this.mdLabelOff = "Off";
            this.mdLabelOn = "On";
            this.handleChange = this.handleChange.bind(this);
        }
        mdCheckedChanged(newValue) {
            if (this.checkbox) {
                this.checkbox.checked = !!newValue;
            }
        }
        mdDisabledChanged(newValue) {
            if (this.checkbox) {
                this.checkbox.disabled = !!newValue;
            }
        }
        attached() {
            this.checkbox.checked = attributes_1.getBooleanFromAttributeValue(this.mdChecked);
            if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                this.checkbox.disabled = true;
            }
            this.checkbox.addEventListener("change", this.handleChange);
            this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
        }
        detached() {
            this.checkbox.removeEventListener("change", this.handleChange);
        }
        handleChange() {
            this.mdChecked = this.checkbox.checked;
            events_1.fireEvent(this.element, "blur");
        }
        blur() {
            events_1.fireEvent(this.element, "blur");
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
    ], MdSwitch.prototype, "mdChecked", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSwitch.prototype, "mdDisabled", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSwitch.prototype, "mdReadonly", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSwitch.prototype, "mdLabelOff", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSwitch.prototype, "mdLabelOn", void 0);
    MdSwitch = __decorate([
        aurelia_framework_1.customElement("md-switch"),
        aurelia_framework_1.autoinject
    ], MdSwitch);
    exports.MdSwitch = MdSwitch;
});
