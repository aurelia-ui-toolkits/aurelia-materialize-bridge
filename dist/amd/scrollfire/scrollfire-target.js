define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdScrollfireTarget = /** @class */ (function () {
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
    exports.MdScrollfireTarget = MdScrollfireTarget;
});
//# sourceMappingURL=scrollfire-target.js.map