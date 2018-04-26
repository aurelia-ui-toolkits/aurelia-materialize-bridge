System.register(["tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, attributes_1, MdCollapsible;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
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
            MdCollapsible = /** @class */ (function () {
                function MdCollapsible(element) {
                    this.element = element;
                    this.accordion = false;
                    this.popout = false;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                MdCollapsible.prototype.attached = function () {
                    this.attributeManager.addClasses("collapsible");
                    if (attributes_1.getBooleanFromAttributeValue(this.popout)) {
                        this.attributeManager.addClasses("popout");
                    }
                    this.refresh();
                };
                MdCollapsible.prototype.detached = function () {
                    this.attributeManager.removeClasses(["collapsible", "popout"]);
                    this.attributeManager.removeAttributes(["data-collapsible"]);
                    $(this.element).collapsible("destroy");
                };
                MdCollapsible.prototype.refresh = function () {
                    var accordion = attributes_1.getBooleanFromAttributeValue(this.accordion);
                    var dataCollapsibleAttributeValue = accordion ? "accordion" : "expandable";
                    this.attributeManager.addAttributes({ "data-collapsible": dataCollapsibleAttributeValue });
                    $(this.element).collapsible({
                        accordion: accordion,
                        onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
                        onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
                    });
                };
                MdCollapsible.prototype.accordionChanged = function () {
                    this.refresh();
                };
                MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function (handler) {
                    return typeof (handler) === "function" ?
                        function (targetElementJquery) {
                            var targetElement = targetElementJquery[0];
                            handler(targetElement);
                        } : null;
                };
                MdCollapsible.prototype.open = function (index) {
                    if (index === void 0) { index = 0; }
                    $(this.element).collapsible("open", index);
                };
                MdCollapsible.prototype.close = function (index) {
                    if (index === void 0) { index = 0; }
                    $(this.element).collapsible("close", index);
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdCollapsible.prototype, "accordion", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdCollapsible.prototype, "popout", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Function)
                ], MdCollapsible.prototype, "onOpen", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Function)
                ], MdCollapsible.prototype, "onClose", void 0);
                MdCollapsible = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-collapsible"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdCollapsible);
                return MdCollapsible;
            }());
            exports_1("MdCollapsible", MdCollapsible);
        }
    };
});
//# sourceMappingURL=collapsible.js.map