import { shadeBlendConvert } from "../common/shade-blend-convert";
var DarkenValueConverter = /** @class */ (function () {
    function DarkenValueConverter() {
    }
    DarkenValueConverter.prototype.toView = function (value, steps) {
        return shadeBlendConvert(-0.3 * parseFloat(steps), value);
    };
    return DarkenValueConverter;
}());
export { DarkenValueConverter };
// tslint:disable-next-line:max-classes-per-file
var LightenValueConverter = /** @class */ (function () {
    function LightenValueConverter() {
    }
    LightenValueConverter.prototype.toView = function (value, steps) {
        return shadeBlendConvert(0.3 * parseFloat(steps), value);
    };
    return LightenValueConverter;
}());
export { LightenValueConverter };
//# sourceMappingURL=color-value-converters.js.map