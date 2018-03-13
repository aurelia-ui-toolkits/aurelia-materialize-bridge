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
const attributes_1 = require("../common/attributes");
const events_1 = require("../common/events");
let MdChip = class MdChip {
    constructor(element) {
        this.element = element;
        this.mdClose = false;
    }
    attached() {
        this.mdClose = attributes_1.getBooleanFromAttributeValue(this.mdClose);
    }
    close() {
        this.element.parentElement.removeChild(this.element);
        events_1.fireEvent(this.element, "close");
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdChip.prototype, "mdClose", void 0);
MdChip = __decorate([
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdChip);
exports.MdChip = MdChip;
