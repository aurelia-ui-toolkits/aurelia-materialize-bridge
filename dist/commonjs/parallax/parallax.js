"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_templating_1 = require("aurelia-templating");
const aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
let MdParallax = class MdParallax {
    constructor(element) {
        this.element = element;
    }
    attached() {
        $(this.element).parallax();
    }
    detached() {
        // destroy handler not available
    }
};
MdParallax = __decorate([
    aurelia_templating_1.customAttribute("md-parallax"),
    aurelia_dependency_injection_1.autoinject
], MdParallax);
exports.MdParallax = MdParallax;
