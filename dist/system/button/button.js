System.register(["tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, attributes_1, MdButton;
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
            MdButton = /** @class */ (function () {
                function MdButton(element) {
                    this.element = element;
                    this.disabled = false;
                    this.flat = false;
                    this.floating = false;
                    this.large = false;
                    this.pulse = false;
                    this.attributeManager = new attributeManager_1.AttributeManager(element);
                }
                MdButton.prototype.disabledChanged = function (newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.addClasses("disabled");
                    }
                    else {
                        this.attributeManager.removeClasses("disabled");
                    }
                };
                MdButton.prototype.flatChanged = function (newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.removeClasses(["btn", "accent"]);
                        this.attributeManager.addClasses("btn-flat");
                    }
                    else {
                        this.attributeManager.removeClasses("btn-flat");
                        this.attributeManager.addClasses(["btn", "accent"]);
                    }
                };
                MdButton.prototype.pulseChanged = function (newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.addClasses("pulse");
                    }
                    else {
                        this.attributeManager.removeClasses("pulse");
                    }
                };
                MdButton.prototype.attached = function () {
                    var classes = [];
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
                };
                MdButton.prototype.detached = function () {
                    this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdButton.prototype, "disabled", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdButton.prototype, "flat", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdButton.prototype, "floating", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdButton.prototype, "large", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdButton.prototype, "pulse", void 0);
                MdButton = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-button"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdButton);
                return MdButton;
            }());
            exports_1("MdButton", MdButton);
        }
    };
});
