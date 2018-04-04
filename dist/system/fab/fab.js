System.register(["tslib", "aurelia-framework", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, MdFab;
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
            }
        ],
        execute: function () {
            MdFab = /** @class */ (function () {
                function MdFab() {
                    this.mdFixed = false;
                    this.mdLarge = false;
                }
                MdFab.prototype.attached = function () {
                    this.mdFixed = attributes_1.getBooleanFromAttributeValue(this.mdFixed);
                    this.mdLarge = attributes_1.getBooleanFromAttributeValue(this.mdLarge);
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdFab.prototype, "mdFixed", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdFab.prototype, "mdLarge", void 0);
                MdFab = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-fab"),
                    aurelia_framework_1.autoinject
                ], MdFab);
                return MdFab;
            }());
            exports_1("MdFab", MdFab);
        }
    };
});
