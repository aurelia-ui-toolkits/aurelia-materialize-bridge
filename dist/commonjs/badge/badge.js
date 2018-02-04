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
let MdBadge = class MdBadge {
    constructor(element) {
        this.element = element;
        this.isNew = false;
        this.caption = null;
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
    }
    isNewChanged(newValue) {
        if (attributes_1.getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("new");
        }
        else {
            this.attributeManager.removeClasses("new");
        }
    }
    captionChanged(newValue) {
        if (newValue !== null) {
            this.attributeManager.addAttributes({ "data-badge-caption": newValue });
        }
        else {
            this.attributeManager.removeAttributes(["data-badge-caption"]);
        }
    }
    attached() {
        const classes = ["badge"];
        if (attributes_1.getBooleanFromAttributeValue(this.isNew)) {
            classes.push("new");
        }
        if (this.caption !== null) {
            this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
        }
        this.attributeManager.addClasses(classes);
    }
    detached() {
        this.attributeManager.removeClasses(["badge", "new"]);
        this.attributeManager.removeAttributes(["data-badge-caption"]);
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdBadge.prototype, "isNew", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdBadge.prototype, "caption", void 0);
MdBadge = __decorate([
    aurelia_framework_1.customAttribute("md-badge"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdBadge);
exports.MdBadge = MdBadge;
