System.register(["aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, attributes_1, MdCollapsible;
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
            MdCollapsible = class MdCollapsible {
                constructor(element) {
                    this.element = element;
                    this.accordion = false;
                    this.popout = false;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                attached() {
                    this.attributeManager.addClasses("collapsible");
                    if (attributes_1.getBooleanFromAttributeValue(this.popout)) {
                        this.attributeManager.addClasses("popout");
                    }
                    this.refresh();
                }
                detached() {
                    this.attributeManager.removeClasses(["collapsible", "popout"]);
                    this.attributeManager.removeAttributes(["data-collapsible"]);
                    $(this.element).collapsible("destroy");
                }
                refresh() {
                    const accordion = attributes_1.getBooleanFromAttributeValue(this.accordion);
                    const dataCollapsibleAttributeValue = accordion ? "accordion" : "expandable";
                    this.attributeManager.addAttributes({ "data-collapsible": dataCollapsibleAttributeValue });
                    $(this.element).collapsible({
                        accordion,
                        onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
                        onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
                    });
                }
                accordionChanged() {
                    this.refresh();
                }
                buildCollapsibleOpenCloseCallbackHandler(handler) {
                    return typeof (handler) === "function" ?
                        (targetElementJquery) => {
                            const targetElement = targetElementJquery[0];
                            handler(targetElement);
                        } : null;
                }
                open(index = 0) {
                    $(this.element).collapsible("open", index);
                }
                close(index = 0) {
                    $(this.element).collapsible("close", index);
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdCollapsible.prototype, "accordion", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdCollapsible.prototype, "popout", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdCollapsible.prototype, "onOpen", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdCollapsible.prototype, "onClose", void 0);
            MdCollapsible = __decorate([
                aurelia_framework_1.customAttribute("md-collapsible"),
                aurelia_framework_1.autoinject
            ], MdCollapsible);
            exports_1("MdCollapsible", MdCollapsible);
        }
    };
});
