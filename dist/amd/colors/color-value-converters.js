define(["require", "exports", "../common/shade-blend-convert"], function (require, exports, shade_blend_convert_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DarkenValueConverter = /** @class */ (function () {
        function DarkenValueConverter() {
        }
        DarkenValueConverter.prototype.toView = function (value, steps) {
            return shade_blend_convert_1.shadeBlendConvert(-0.3 * parseFloat(steps), value);
        };
        return DarkenValueConverter;
    }());
    exports.DarkenValueConverter = DarkenValueConverter;
    // tslint:disable-next-line:max-classes-per-file
    var LightenValueConverter = /** @class */ (function () {
        function LightenValueConverter() {
        }
        LightenValueConverter.prototype.toView = function (value, steps) {
            return shade_blend_convert_1.shadeBlendConvert(0.3 * parseFloat(steps), value);
        };
        return LightenValueConverter;
    }());
    exports.LightenValueConverter = LightenValueConverter;
});
//# sourceMappingURL=color-value-converters.js.map