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
const aurelia_router_1 = require("aurelia-router");
// taken from: https://github.com/heruan/aurelia-breadcrumbs
let MdBreadcrumbs = class MdBreadcrumbs {
    constructor(element, aureliaRouter) {
        this.element = element;
        this.aureliaRouter = aureliaRouter;
    }
    bind() {
        if (!this.router) {
            this.router = this.aureliaRouter;
        }
        this.childRouter = this.router;
        let router = this.router;
        while (router.parent) {
            router = router.parent;
        }
        this.router = router;
    }
    navigate(navigationInstruction) {
        this.childRouter.navigateToRoute(navigationInstruction.config.name);
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", aurelia_router_1.Router)
], MdBreadcrumbs.prototype, "router", void 0);
MdBreadcrumbs = __decorate([
    aurelia_framework_1.customElement("md-breadcrumbs"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element, aurelia_router_1.Router])
], MdBreadcrumbs);
exports.MdBreadcrumbs = MdBreadcrumbs;
