var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (require, exports, aurelia_framework_1, attributeManager_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdRadio = MdRadio_1 = class MdRadio {
        constructor(element) {
            this.element = element;
            this.mdDisabled = false;
            this.mdReadonly = false;
            this.mdGap = false;
            this.mdName = "";
            this.mdValue = "";
            this.controlId = `md-radio-${MdRadio_1.id++}`;
            // this.handleChange = this.handleChange.bind(this);
        }
        mdDisabledChanged(newValue) {
            if (this.radio) {
                this.radio.disabled = !!newValue;
            }
        }
        attached() {
            this.attributeManager = new attributeManager_1.AttributeManager(this.radio);
            if (attributes_1.getBooleanFromAttributeValue(this.mdGap)) {
                this.attributeManager.addClasses("with-gap");
            }
            if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                this.radio.disabled = true;
            }
            this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
        }
        detached() {
            this.attributeManager.removeClasses(["with-gap", "disabled"]);
        }
    };
    MdRadio.id = 0;
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
    ], MdRadio.prototype, "mdChecked", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdDisabled", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdReadonly", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdGap", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdModel", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdName", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdRadio.prototype, "mdValue", void 0);
    MdRadio = MdRadio_1 = __decorate([
        aurelia_framework_1.customElement("md-radio"),
        aurelia_framework_1.autoinject
    ], MdRadio);
    exports.MdRadio = MdRadio;
    var MdRadio_1;
});
