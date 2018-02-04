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
let MdTapTarget = MdTapTarget_1 = class MdTapTarget {
    constructor(element) {
        this.element = element;
        this.mdRef = null;
        this.log = aurelia_logging_1.getLogger("md-tap-target");
    }
    bind() {
        if (!this.mdRef) {
            throw new Error("md-tap-target needs a referenced element");
        }
        else {
            let id = this.mdRef.getAttribute("id");
            if (!id) {
                id = `md-tap-target-${MdTapTarget_1.controlId++}`;
                this.mdRef.setAttribute("id", id);
            }
            this.element.setAttribute("data-activates", id);
        }
    }
    open() {
        $(this.element).tapTarget("open");
    }
    close() {
        $(this.element).tapTarget("close");
    }
};
MdTapTarget.controlId = 0;
__decorate([
    aurelia_framework_1.bindable
], MdTapTarget.prototype, "mdRef", void 0);
MdTapTarget = MdTapTarget_1 = __decorate([
    aurelia_framework_1.customElement("md-tap-target"),
    aurelia_framework_1.autoinject
], MdTapTarget);
exports.MdTapTarget = MdTapTarget;
var MdTapTarget_1;
