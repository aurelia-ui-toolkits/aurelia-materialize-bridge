"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributeManager_1 = require("../common/attributeManager");
var MdFooter = /** @class */ (function () {
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
exports.MdFooter = MdFooter;
//# sourceMappingURL=footer.js.map