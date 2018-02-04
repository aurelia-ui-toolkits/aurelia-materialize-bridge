System.register(["aurelia-framework", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, MdTapTarget, MdTapTarget_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdTapTarget = MdTapTarget_1 = class MdTapTarget {
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
            exports_1("MdTapTarget", MdTapTarget);
        }
    };
});
