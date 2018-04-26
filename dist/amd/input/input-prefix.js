define(["require", "exports", "tslib", "aurelia-framework", "../common/attributeManager"], function (require, exports, tslib_1, aurelia_framework_1, attributeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdPrefix = /** @class */ (function () {
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
    exports.MdPrefix = MdPrefix;
});
//# sourceMappingURL=input-prefix.js.map