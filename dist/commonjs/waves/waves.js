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
const config_builder_1 = require("../config-builder");
let MdWaves = class MdWaves {
    constructor(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.block = false;
        this.circle = false;
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
    }
    attached() {
        let classes = ["waves-effect"];
        if (attributes_1.getBooleanFromAttributeValue(this.block)) {
            classes.push("waves-block");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.circle)) {
            classes.push("waves-circle");
        }
        if (this.color) {
            classes.push(`waves-${this.color}`);
        }
        this.attributeManager.addClasses(classes);
        if (!this.configBuilder.noWavesAttach) {
            Waves.attach(this.element);
        }
    }
    detached() {
        let classes = ["waves-effect", "waves-block"];
        if (this.color) {
            classes.push(`waves-${this.color}`);
        }
        this.attributeManager.removeClasses(classes);
    }
};
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdWaves.prototype, "block", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdWaves.prototype, "circle", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdWaves.prototype, "color", void 0);
MdWaves = __decorate([
    aurelia_framework_1.customAttribute("md-waves"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element, config_builder_1.ConfigBuilder])
], MdWaves);
exports.MdWaves = MdWaves;
