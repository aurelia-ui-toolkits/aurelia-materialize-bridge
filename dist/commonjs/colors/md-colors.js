"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdColors = /** @class */ (function () {
    function MdColors() {
        this.errorColor = "#F44336";
        this.successColor = "#26A69A";
    }
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "primaryColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "accentColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "errorColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "successColor", void 0);
    MdColors = tslib_1.__decorate([
        au.customElement("md-colors")
    ], MdColors);
    return MdColors;
}());
exports.MdColors = MdColors;
//# sourceMappingURL=md-colors.js.map