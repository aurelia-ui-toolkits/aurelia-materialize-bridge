System.register(["tslib", "aurelia-framework", "../common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, MdFooter;
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
            }
        ],
        execute: function () {
            MdFooter = /** @class */ (function () {
                function MdFooter(element) {
                    this.element = element;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                MdFooter.prototype.bind = function () {
                    this.attributeManager.addClasses("page-footer");
                };
                MdFooter.prototype.unbind = function () {
                    this.attributeManager.removeClasses("page-footer");
                };
                MdFooter = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-footer"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdFooter);
                return MdFooter;
            }());
            exports_1("MdFooter", MdFooter);
        }
    };
});
