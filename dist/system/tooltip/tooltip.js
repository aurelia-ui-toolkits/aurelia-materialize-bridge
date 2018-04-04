System.register(["tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, attributes_1, MdTooltip;
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
            MdTooltip = /** @class */ (function () {
                function MdTooltip(element) {
                    this.element = element;
                    this.position = "bottom";
                    this.delay = 50;
                    this.html = false;
                    this.text = "";
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                MdTooltip.prototype.bind = function () {
                    this.html = attributes_1.getBooleanFromAttributeValue(this.html);
                };
                MdTooltip.prototype.attached = function () {
                    this.attributeManager.addClasses("tooltipped");
                    this.attributeManager.addAttributes({ "data-position": this.position, "data-tooltip": this.text });
                    this.initTooltip();
                };
                MdTooltip.prototype.detached = function () {
                    $(this.element).tooltip("remove");
                    this.attributeManager.removeClasses("tooltipped");
                    this.attributeManager.removeAttributes(["data-position", "data-tooltip"]);
                };
                MdTooltip.prototype.textChanged = function () {
                    this.attributeManager.addAttributes({ "data-tooltip": this.text });
                    this.initTooltip();
                };
                MdTooltip.prototype.initTooltip = function () {
                    $(this.element).tooltip("remove");
                    $(this.element).tooltip({
                        delay: parseInt(this.delay.toString(), 10),
                        html: this.html
                    });
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdTooltip.prototype, "position", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdTooltip.prototype, "delay", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdTooltip.prototype, "html", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdTooltip.prototype, "text", void 0);
                MdTooltip = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-tooltip"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdTooltip);
                return MdTooltip;
            }());
            exports_1("MdTooltip", MdTooltip);
        }
    };
});
