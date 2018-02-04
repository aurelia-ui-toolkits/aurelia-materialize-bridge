"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributes_1 = require("../common/attributes");
let MdCard = class MdCard {
    constructor(element) {
        this.element = element;
        this.mdImage = null;
        this.mdReveal = false;
        this.mdAction = false;
        this.mdStickyAction = false;
        this.mdSize = "";
    }
    attached() {
        this.mdHorizontal = attributes_1.getBooleanFromAttributeValue(this.mdHorizontal);
        this.mdReveal = attributes_1.getBooleanFromAttributeValue(this.mdReveal);
        this.mdAction = attributes_1.getBooleanFromAttributeValue(this.mdAction);
        this.mdStickyAction = attributes_1.getBooleanFromAttributeValue(this.mdStickyAction);
    }
};
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdHorizontal", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdImage", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdReveal", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdAction", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdStickyAction", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
], MdCard.prototype, "mdSize", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdTitle", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdCard.prototype, "mdClass", void 0);
MdCard = __decorate([
    aurelia_framework_1.customElement("md-card"),
    aurelia_framework_1.autoinject
], MdCard);
exports.MdCard = MdCard;
