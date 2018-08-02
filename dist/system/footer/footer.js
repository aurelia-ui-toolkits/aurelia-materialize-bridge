System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdFooter;
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
            MdFooter = /** @class */ (function () {
                function MdFooter(element) {
                    this.element = element;
                    this.attributeManager = new au.AttributeManager(this.element);
                }
                MdFooter.prototype.bind = function () {
                    this.attributeManager.addClasses("page-footer");
                };
                MdFooter.prototype.unbind = function () {
                    this.attributeManager.removeClasses("page-footer");
                };
                MdFooter = tslib_1.__decorate([
                    au.customAttribute("md-footer"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdFooter);
                return MdFooter;
            }());
            exports_1("MdFooter", MdFooter);
        }
    };
});
//# sourceMappingURL=footer.js.map