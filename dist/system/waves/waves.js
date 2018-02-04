System.register(["aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, attributes_1, MdWaves;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdWaves = class MdWaves {
                constructor(element, configBuilder) {
                    this.element = element;
                    this.configBuilder = configBuilder;
                    this.block = false;
                    this.circle = false;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                attached() {
                    let classes = ["waves-effect"];
                    if (attributes_1.getBooleanFromAttributeValue(this.block)) {
                        classes.push("waves-block");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.circle)) {
                        classes.push("waves-circle");
                    }
                    if (this.color) {
                        classes.push(`waves-${this.color}`);
                    }
                    this.attributeManager.addClasses(classes);
                    if (!this.configBuilder.noWavesAttach) {
                        Waves.attach(this.element);
                    }
                }
                detached() {
                    let classes = ["waves-effect", "waves-block"];
                    if (this.color) {
                        classes.push(`waves-${this.color}`);
                    }
                    this.attributeManager.removeClasses(classes);
                }
            };
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdWaves.prototype, "block", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdWaves.prototype, "circle", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdWaves.prototype, "color", void 0);
            MdWaves = __decorate([
                aurelia_framework_1.customAttribute("md-waves"),
                aurelia_framework_1.autoinject
            ], MdWaves);
            exports_1("MdWaves", MdWaves);
        }
    };
});
