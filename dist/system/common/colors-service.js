System.register(["./shade-blend-convert"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var shade_blend_convert_1, MdColorsService;
    return {
        setters: [
            function (shade_blend_convert_1_1) {
                shade_blend_convert_1 = shade_blend_convert_1_1;
            }
        ],
        execute: function () {
            MdColorsService = /** @class */ (function () {
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
            exports_1("MdColorsService", MdColorsService);
        }
    };
});
//# sourceMappingURL=colors-service.js.map