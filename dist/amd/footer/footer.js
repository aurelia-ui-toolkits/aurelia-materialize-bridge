var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributeManager"], function (require, exports, aurelia_framework_1, attributeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdFooter = class MdFooter {
        constructor(element) {
            this.element = element;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        }
        bind() {
            this.attributeManager.addClasses("page-footer");
        }
        unbind() {
            this.attributeManager.removeClasses("page-footer");
        }
    };
    MdFooter = __decorate([
        aurelia_framework_1.customAttribute("md-footer"),
        aurelia_framework_1.autoinject
    ], MdFooter);
    exports.MdFooter = MdFooter;
});
