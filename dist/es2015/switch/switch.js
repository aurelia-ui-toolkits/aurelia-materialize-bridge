var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";
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
        this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
        if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
        }
        this.checkbox.addEventListener("change", this.handleChange);
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    }
    detached() {
        this.checkbox.removeEventListener("change", this.handleChange);
    }
    handleChange() {
        this.mdChecked = this.checkbox.checked;
        fireEvent(this.element, "blur");
    }
    blur() {
        fireEvent(this.element, "blur");
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdSwitch.prototype, "mdChecked", void 0);
__decorate([
    bindable
], MdSwitch.prototype, "mdDisabled", void 0);
__decorate([
    bindable
], MdSwitch.prototype, "mdReadonly", void 0);
__decorate([
    bindable
], MdSwitch.prototype, "mdLabelOff", void 0);
__decorate([
    bindable
], MdSwitch.prototype, "mdLabelOn", void 0);
MdSwitch = __decorate([
    customElement("md-switch"),
    autoinject
], MdSwitch);
export { MdSwitch };
