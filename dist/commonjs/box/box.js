"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributeManager_1 = require("../common/attributeManager");
let MdBox = class MdBox {
    constructor(element) {
        this.element = element;
        this.element = element;
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
    }
    attached() {
        this.attributeManager.addClasses("materialboxed");
        if (this.caption) {
            this.attributeManager.addAttributes({ "data-caption": this.caption });
        }
        // FIXME:0 throws "Uncaught TypeError: Cannot read property "css" of undefined", but so does the original
        $(this.element).materialbox();
    }
    detached() {
        this.attributeManager.removeAttributes("data-caption");
        this.attributeManager.removeClasses("materialboxed");
    }
};
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdBox.prototype, "caption", void 0);
MdBox = __decorate([
    aurelia_framework_1.customAttribute("md-box"),
    aurelia_framework_1.autoinject
], MdBox);
exports.MdBox = MdBox;
