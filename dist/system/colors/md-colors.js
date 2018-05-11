System.register(["tslib", "../aurelia", "./shade-blend-convert"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, shade_blend_convert_1, MdColors;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (shade_blend_convert_1_1) {
                shade_blend_convert_1 = shade_blend_convert_1_1;
            }
        ],
        execute: function () {
            MdColors = /** @class */ (function () {
                function MdColors() {
                    this.primaryColor = "#e57373";
                    this.accentColor = "#26a69a";
                    this.errorColor = "#F44336";
                    this.successColor = "#4CAF50";
                }
                MdColors.prototype.toRgb = function (hex, lightenDarken) {
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
            exports_1("MdColors", MdColors);
        }
    };
});
//# sourceMappingURL=md-colors.js.map