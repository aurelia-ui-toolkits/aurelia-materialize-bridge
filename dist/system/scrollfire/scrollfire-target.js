System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, MdScrollfireTarget;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdScrollfireTarget = class MdScrollfireTarget {
                constructor() {
                    this.callback = null;
                    this.offset = 0;
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdScrollfireTarget.prototype, "callback", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdScrollfireTarget.prototype, "offset", void 0);
            MdScrollfireTarget = __decorate([
                aurelia_framework_1.customAttribute("md-scrollfire-target"),
                aurelia_framework_1.autoinject
            ], MdScrollfireTarget);
            exports_1("MdScrollfireTarget", MdScrollfireTarget);
        }
    };
});
