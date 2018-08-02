System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdPrefix;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdPrefix = /** @class */ (function () {
                function MdPrefix(element) {
                    this.element = element;
                    this.attributeManager = new au.AttributeManager(this.element);
                }
                MdPrefix.prototype.bind = function () {
                    this.attributeManager.addClasses("prefix");
                };
                MdPrefix.prototype.unbind = function () {
                    this.attributeManager.removeClasses("prefix");
                };
                MdPrefix = tslib_1.__decorate([
                    au.customAttribute("md-prefix"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdPrefix);
                return MdPrefix;
            }());
            exports_1("MdPrefix", MdPrefix);
        }
    };
});
//# sourceMappingURL=input-prefix.js.map