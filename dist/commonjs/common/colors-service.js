"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shade_blend_convert_1 = require("./shade-blend-convert");
var MdColorsService = /** @class */ (function () {
    function MdColorsService() {
        this.primaryColor = "#e57373";
        this.accentColor = "#26a69a";
        this.errorColor = "#F44336";
        this.successColor = "#4CAF50";
    }
    MdColorsService.prototype.toRgb = function (hex, lightenDarken) {
        if (!hex) {
            return hex;
        }
        if (lightenDarken) {
            hex = shade_blend_convert_1.shadeBlendConvert(0.3 * lightenDarken, hex);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5), 16);
        return r + "," + g + "," + b;
    };
    return MdColorsService;
}());
exports.MdColorsService = MdColorsService;
//# sourceMappingURL=colors-service.js.map