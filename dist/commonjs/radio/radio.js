"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributeManager_1 = require("../common/attributeManager");
const attributes_1 = require("../common/attributes");
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
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdRadio.prototype, "mdChecked", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdRadio.prototype, "mdDisabled", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdRadio.prototype, "mdReadonly", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdRadio.prototype, "mdGap", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdRadio.prototype, "mdModel", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdRadio.prototype, "mdName", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdRadio.prototype, "mdValue", void 0);
MdRadio = MdRadio_1 = __decorate([
    aurelia_framework_1.customElement("md-radio"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdRadio);
exports.MdRadio = MdRadio;
var MdRadio_1;
