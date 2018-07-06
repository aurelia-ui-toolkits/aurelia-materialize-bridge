System.register(["../common/shade-blend-convert"], function (exports_1, context_1) {
    "use strict";
    var shade_blend_convert_1, DarkenValueConverter, LightenValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (shade_blend_convert_1_1) {
                shade_blend_convert_1 = shade_blend_convert_1_1;
            }
        ],
        execute: function () {
            DarkenValueConverter = /** @class */ (function () {
                function DarkenValueConverter() {
                }
                DarkenValueConverter.prototype.toView = function (value, steps) {
                    return shade_blend_convert_1.shadeBlendConvert(-0.3 * parseFloat(steps), value);
                };
                return DarkenValueConverter;
            }());
            exports_1("DarkenValueConverter", DarkenValueConverter);
            // tslint:disable-next-line:max-classes-per-file
            LightenValueConverter = /** @class */ (function () {
                function LightenValueConverter() {
                }
                LightenValueConverter.prototype.toView = function (value, steps) {
                    return shade_blend_convert_1.shadeBlendConvert(0.3 * parseFloat(steps), value);
                };
                return LightenValueConverter;
            }());
            exports_1("LightenValueConverter", LightenValueConverter);
        }
    };
});
//# sourceMappingURL=color-value-converters.js.map