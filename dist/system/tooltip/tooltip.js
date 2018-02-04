System.register(["aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, attributes_1, MdTooltip;
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
            MdTooltip = class MdTooltip {
                constructor(element) {
                    this.element = element;
                    this.position = "bottom";
                    this.delay = 50;
                    this.html = false;
                    this.text = "";
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                bind() {
                    this.html = attributes_1.getBooleanFromAttributeValue(this.html);
                }
                attached() {
                    this.attributeManager.addClasses("tooltipped");
                    this.attributeManager.addAttributes({ "data-position": this.position, "data-tooltip": this.text });
                    this.initTooltip();
                }
                detached() {
                    $(this.element).tooltip("remove");
                    this.attributeManager.removeClasses("tooltipped");
                    this.attributeManager.removeAttributes(["data-position", "data-tooltip"]);
                }
                textChanged() {
                    this.attributeManager.addAttributes({ "data-tooltip": this.text });
                    this.initTooltip();
                }
                initTooltip() {
                    $(this.element).tooltip("remove");
                    $(this.element).tooltip({
                        delay: parseInt(this.delay.toString(), 10),
                        html: this.html
                    });
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdTooltip.prototype, "position", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTooltip.prototype, "delay", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTooltip.prototype, "html", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTooltip.prototype, "text", void 0);
            MdTooltip = __decorate([
                aurelia_framework_1.customAttribute("md-tooltip"),
                aurelia_framework_1.autoinject
            ], MdTooltip);
            exports_1("MdTooltip", MdTooltip);
        }
    };
});
