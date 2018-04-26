System.register(["tslib", "aurelia-framework", "../common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, MdPrefix;
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
            MdPrefix = /** @class */ (function () {
                function MdPrefix(element) {
                    this.element = element;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                MdPrefix.prototype.bind = function () {
                    this.attributeManager.addClasses("prefix");
                };
                MdPrefix.prototype.unbind = function () {
                    this.attributeManager.removeClasses("prefix");
                };
                MdPrefix = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-prefix"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdPrefix);
                return MdPrefix;
            }());
            exports_1("MdPrefix", MdPrefix);
        }
    };
});
//# sourceMappingURL=input-prefix.js.map