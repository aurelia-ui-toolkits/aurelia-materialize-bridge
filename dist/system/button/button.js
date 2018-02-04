System.register(["aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, attributes_1, MdButton;
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
            MdButton = class MdButton {
                constructor(element) {
                    this.element = element;
                    this.disabled = false;
                    this.flat = false;
                    this.floating = false;
                    this.large = false;
                    this.pulse = false;
                    this.attributeManager = new attributeManager_1.AttributeManager(element);
                }
                disabledChanged(newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.addClasses("disabled");
                    }
                    else {
                        this.attributeManager.removeClasses("disabled");
                    }
                }
                flatChanged(newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.removeClasses(["btn", "accent"]);
                        this.attributeManager.addClasses("btn-flat");
                    }
                    else {
                        this.attributeManager.removeClasses("btn-flat");
                        this.attributeManager.addClasses(["btn", "accent"]);
                    }
                }
                pulseChanged(newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.addClasses("pulse");
                    }
                    else {
                        this.attributeManager.removeClasses("pulse");
                    }
                }
                attached() {
                    const classes = [];
                    if (attributes_1.getBooleanFromAttributeValue(this.flat)) {
                        classes.push("btn-flat");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.floating)) {
                        classes.push("btn-floating");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.large)) {
                        classes.push("btn-large");
                    }
                    if (classes.length === 0) {
                        classes.push("btn");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.disabled)) {
                        classes.push("disabled");
                    }
                    if (!attributes_1.getBooleanFromAttributeValue(this.flat)) {
                        classes.push("accent");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.pulse)) {
                        classes.push("pulse");
                    }
                    this.attributeManager.addClasses(classes);
                }
                detached() {
                    this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdButton.prototype, "disabled", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdButton.prototype, "flat", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdButton.prototype, "floating", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdButton.prototype, "large", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdButton.prototype, "pulse", void 0);
            MdButton = __decorate([
                aurelia_framework_1.customAttribute("md-button"),
                aurelia_framework_1.autoinject
            ], MdButton);
            exports_1("MdButton", MdButton);
        }
    };
});
