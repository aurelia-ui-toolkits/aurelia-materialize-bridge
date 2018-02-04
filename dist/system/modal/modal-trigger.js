System.register(["aurelia-framework", "../common/attributes", "../common/attributeManager", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, attributeManager_1, events_1, MdModalTrigger;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdModalTrigger = class MdModalTrigger {
                constructor(element) {
                    this.element = element;
                    this.dismissible = true;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                    this.onComplete = this.onComplete.bind(this);
                }
                attached() {
                    this.attributeManager.addClasses("modal-trigger");
                    $(this.element).leanModal({
                        complete: this.onComplete,
                        dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible)
                    });
                }
                detached() {
                    this.attributeManager.removeClasses("modal-trigger");
                }
                onComplete() {
                    events_1.fireMaterializeEvent(this.element, "modal-complete");
                }
            };
            __decorate([
                aurelia_framework_1.bindable()
            ], MdModalTrigger.prototype, "dismissible", void 0);
            MdModalTrigger = __decorate([
                aurelia_framework_1.customAttribute("md-modal-trigger"),
                aurelia_framework_1.autoinject
            ], MdModalTrigger);
            exports_1("MdModalTrigger", MdModalTrigger);
        }
    };
});
