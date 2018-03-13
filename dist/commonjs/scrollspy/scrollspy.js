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
let MdScrollSpy = class MdScrollSpy {
    constructor(element) {
        this.element = element;
    }
    attached() {
        $(this.target, this.element).scrollSpy();
    }
    detached() {
        // destroy handler not available
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdScrollSpy.prototype, "target", void 0);
MdScrollSpy = __decorate([
    aurelia_framework_1.customAttribute("md-scrollspy"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdScrollSpy);
exports.MdScrollSpy = MdScrollSpy;
