System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdScrollfireTarget;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdScrollfireTarget = /** @class */ (function () {
                function MdScrollfireTarget() {
                    this.callback = null;
                    this.offset = 0;
                }
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Function)
                ], MdScrollfireTarget.prototype, "callback", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Number)
                ], MdScrollfireTarget.prototype, "offset", void 0);
                MdScrollfireTarget = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-scrollfire-target"),
                    aurelia_framework_1.autoinject
                ], MdScrollfireTarget);
                return MdScrollfireTarget;
            }());
            exports_1("MdScrollfireTarget", MdScrollfireTarget);
        }
    };
});
//# sourceMappingURL=scrollfire-target.js.map