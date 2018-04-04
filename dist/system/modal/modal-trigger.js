System.register(["tslib", "aurelia-framework", "../common/attributes", "../common/attributeManager", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, attributeManager_1, events_1, MdModalTrigger;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
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
            MdModalTrigger = /** @class */ (function () {
                function MdModalTrigger(element) {
                    this.element = element;
                    this.dismissible = true;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                    this.onComplete = this.onComplete.bind(this);
                }
                MdModalTrigger.prototype.attached = function () {
                    this.attributeManager.addClasses("modal-trigger");
                    $(this.element).leanModal({
                        complete: this.onComplete,
                        dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible)
                    });
                };
                MdModalTrigger.prototype.detached = function () {
                    this.attributeManager.removeClasses("modal-trigger");
                };
                MdModalTrigger.prototype.onComplete = function () {
                    events_1.fireMaterializeEvent(this.element, "modal-complete");
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable(),
                    tslib_1.__metadata("design:type", Object)
                ], MdModalTrigger.prototype, "dismissible", void 0);
                MdModalTrigger = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-modal-trigger"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdModalTrigger);
                return MdModalTrigger;
            }());
            exports_1("MdModalTrigger", MdModalTrigger);
        }
    };
});
