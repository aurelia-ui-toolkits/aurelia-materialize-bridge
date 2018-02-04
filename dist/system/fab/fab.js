System.register(["aurelia-framework", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, MdFab;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdFab = class MdFab {
                constructor() {
                    this.mdFixed = false;
                    this.mdLarge = false;
                }
                attached() {
                    this.mdFixed = attributes_1.getBooleanFromAttributeValue(this.mdFixed);
                    this.mdLarge = attributes_1.getBooleanFromAttributeValue(this.mdLarge);
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdFab.prototype, "mdFixed", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdFab.prototype, "mdLarge", void 0);
            MdFab = __decorate([
                aurelia_framework_1.customElement("md-fab"),
                aurelia_framework_1.autoinject
            ], MdFab);
            exports_1("MdFab", MdFab);
        }
    };
});
