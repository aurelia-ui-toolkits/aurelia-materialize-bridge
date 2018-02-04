"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const aurelia_logging_1 = require("aurelia-logging");
let MdFadeinImage = class MdFadeinImage {
    constructor(element) {
        this.element = element;
        this.fadeInImage = this.fadeInImage.bind(this);
        this.log = aurelia_logging_1.getLogger("md-fadein-image");
    }
    attached() {
        this.element.addEventListener("click", this.fadeInImage);
        this.ensureOpacity();
    }
    detached() {
        this.element.removeEventListener("click", this.fadeInImage);
    }
    fadeInImage() {
        Materialize.fadeInImage($(this.ref));
    }
    ensureOpacity() {
        let opacity = window.getComputedStyle(this.ref).opacity;
        if (opacity !== "0") {
            this.ref.style.opacity = "0";
        }
    }
};
__decorate([
    aurelia_framework_1.bindable
], MdFadeinImage.prototype, "ref", void 0);
MdFadeinImage = __decorate([
    aurelia_framework_1.customAttribute("md-fadein-image"),
    aurelia_framework_1.autoinject
], MdFadeinImage);
exports.MdFadeinImage = MdFadeinImage;
