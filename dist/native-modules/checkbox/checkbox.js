var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdCheckbox = MdCheckbox_1 = class MdCheckbox {
    constructor(element) {
        this.element = element;
        this.mdReadonly = false;
        this.controlId = `md-checkbox-${MdCheckbox_1.id++}`;
    }
    mdDisabledChanged(newValue) {
        if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
        }
    }
    mdReadonlyChanged() {
        if (!this.checkbox) {
            return;
        }
        if (this.mdReadonly) {
            this.checkbox.addEventListener("change", this.preventChange);
        }
        else {
            this.checkbox.removeEventListener("change", this.preventChange);
        }
    }
    attached() {
        this.attributeManager = new AttributeManager(this.checkbox);
        if (getBooleanFromAttributeValue(this.mdFilledIn)) {
            this.attributeManager.addClasses("filled-in");
        }
        if (this.mdChecked === null) {
            this.checkbox.indeterminate = true;
        }
        else {
            this.checkbox.indeterminate = false;
        }
        if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
        }
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
        this.mdReadonlyChanged();
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
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdCheckbox.prototype, "mdChecked", void 0);
__decorate([
    bindable
], MdCheckbox.prototype, "mdDisabled", void 0);
__decorate([
    bindable
], MdCheckbox.prototype, "mdReadonly", void 0);
__decorate([
    bindable
], MdCheckbox.prototype, "mdFilledIn", void 0);
__decorate([
    bindable
], MdCheckbox.prototype, "mdMatcher", void 0);
__decorate([
    bindable
], MdCheckbox.prototype, "mdModel", void 0);
MdCheckbox = MdCheckbox_1 = __decorate([
    customElement("md-checkbox"),
    autoinject
], MdCheckbox);
export { MdCheckbox };
var MdCheckbox_1;
