System.register(["aurelia-templating", "aurelia-dependency-injection"], function (exports_1, context_1) {
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
    var aurelia_templating_1, aurelia_dependency_injection_1, MdParallax;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }
        ],
        execute: function () {
            MdParallax = class MdParallax {
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
                aurelia_dependency_injection_1.autoinject,
                __metadata("design:paramtypes", [Element])
            ], MdParallax);
            exports_1("MdParallax", MdParallax);
        }
    };
});
