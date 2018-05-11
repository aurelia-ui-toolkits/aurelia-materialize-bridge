"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var shade_blend_convert_1 = require("./shade-blend-convert");
var MdColors = /** @class */ (function () {
    function MdColors() {
        this.errorColor = "#F44336";
        this.successColor = "#26A69A";
    }
    MdColors.prototype.toRgb = function (hex, lightenDarken) {
        if (lightenDarken) {
            hex = shade_blend_convert_1.shadeBlendConvert(0.3 * lightenDarken, hex);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5), 16);
        return r + "," + g + "," + b;
    };
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