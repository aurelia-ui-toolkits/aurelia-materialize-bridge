System.register(["aurelia-framework", "../common/attributeManager"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, MdFooter;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            }
        ],
        execute: function () {
            MdFooter = class MdFooter {
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
                aurelia_framework_1.autoinject,
                __metadata("design:paramtypes", [Element])
            ], MdFooter);
            exports_1("MdFooter", MdFooter);
        }
    };
});
