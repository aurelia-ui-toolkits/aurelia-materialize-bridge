var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (require, exports, aurelia_framework_1, attributeManager_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.attributeManager = new attributeManager_1.AttributeManager(this.checkbox);
            if (attributes_1.getBooleanFromAttributeValue(this.mdFilledIn)) {
                this.attributeManager.addClasses("filled-in");
            }
            if (this.mdChecked === null) {
                this.checkbox.indeterminate = true;
            }
            else {
                this.checkbox.indeterminate = false;
            }
            if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                this.checkbox.disabled = true;
            }
            this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
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
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdChecked", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdDisabled", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], MdCheckbox.prototype, "mdReadonly", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdFilledIn", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], MdCheckbox.prototype, "mdMatcher", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdModel", void 0);
    MdCheckbox = MdCheckbox_1 = __decorate([
        aurelia_framework_1.customElement("md-checkbox"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdCheckbox);
    exports.MdCheckbox = MdCheckbox;
    var MdCheckbox_1;
});
