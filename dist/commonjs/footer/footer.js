"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdFooter = /** @class */ (function () {
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
exports.MdFooter = MdFooter;
//# sourceMappingURL=footer.js.map