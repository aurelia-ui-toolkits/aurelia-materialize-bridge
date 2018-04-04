define(["require", "exports", "tslib", "aurelia-framework", "../common/attributes"], function (require, exports, tslib_1, aurelia_framework_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdFab = /** @class */ (function () {
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
    exports.MdFab = MdFab;
});
