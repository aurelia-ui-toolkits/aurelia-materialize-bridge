import * as tslib_1 from "tslib";
import { shadeBlendConvert } from "./shade-blend-convert";
var MdColorsService = /** @class */ (function () {
    function MdColorsService() {
        this.primaryColor = "#ee6e73";
        this.secondaryColor = "#26a69a";
        this.errorColor = "#f44336";
        this.successColor = "#4caf50";
        this.linkColor = "#039be5";
        this.updatePrimaryShades();
    }
    MdColorsService.prototype.updatePrimaryShades = function () {
        this.primaryColorLight = this.lighten(this.primaryColor, 15);
        this.primaryColorDark = this.darken(this.primaryColor, 15);
    };
    MdColorsService.prototype.hexToRgb = function (hex) {
        if (!hex || !hex.startsWith("#") || hex.length < 7) {
            return [0, 0, 0];
        }
        return [parseInt(hex.substring(1, 3), 16), parseInt(hex.substring(3, 5), 16), parseInt(hex.substring(5), 16)];
    };
    MdColorsService.prototype.rgbToHex = function (_a) {
        var _b = tslib_1.__read(_a, 3), r = _b[0], g = _b[1], b = _b[2];
        return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
    };
    MdColorsService.prototype.toRgb = function (hex, lightenDarken) {
        if (!hex) {
            return hex;
        }
        if (lightenDarken) {
            hex = shadeBlendConvert(0.3 * lightenDarken, hex);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5), 16);
        return r + "," + g + "," + b;
    };
    MdColorsService.prototype.rgba = function (hex, alpha) {
        var _a = tslib_1.__read(this.hexToRgb(hex), 3), r = _a[0], g = _a[1], b = _a[2];
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    };
    MdColorsService.prototype.lighten = function (hex, amount) {
        var rgb = this.hexToRgb(hex);
        var hsl = this.rgbToHsl(rgb);
        hsl[2] += amount / 100;
        rgb = this.hslToRgb(hsl);
        return this.rgbToHex(rgb);
    };
    MdColorsService.prototype.darken = function (hex, amount) {
        return this.lighten(hex, -amount);
    };
    MdColorsService.prototype.transparentize = function (hex, amount) {
        return this.rgba(hex, 1 - amount);
    };
    MdColorsService.prototype.desaturate = function (hex, amount) {
        var rgb = this.hexToRgb(hex);
        var hsl = this.rgbToHsl(rgb);
        hsl[1] -= amount / 100;
        rgb = this.hslToRgb(hsl);
        return this.rgbToHex(rgb);
    };
    MdColorsService.prototype.rgbToHsl = function (_a) {
        var _b = tslib_1.__read(_a, 3), r = _b[0], g = _b[1], b = _b[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h;
        var s;
        var l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, l];
    };
    MdColorsService.prototype.hue2rgb = function (p, q, t) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    };
    MdColorsService.prototype.hslToRgb = function (_a) {
        var _b = tslib_1.__read(_a, 3), h = _b[0], s = _b[1], l = _b[2];
        var r;
        var g;
        var b;
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = this.hue2rgb(p, q, h + 1 / 3);
            g = this.hue2rgb(p, q, h);
            b = this.hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };
    return MdColorsService;
}());
export { MdColorsService };
//# sourceMappingURL=colors-service.js.map