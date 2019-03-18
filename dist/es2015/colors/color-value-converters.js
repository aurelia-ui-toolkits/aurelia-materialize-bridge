import { shadeBlendConvert } from "../common/shade-blend-convert";
export class DarkenValueConverter {
    toView(value, steps) {
        return shadeBlendConvert(-0.3 * parseFloat(steps), value);
    }
}
// tslint:disable-next-line:max-classes-per-file
export class LightenValueConverter {
    toView(value, steps) {
        return shadeBlendConvert(0.3 * parseFloat(steps), value);
    }
}
//# sourceMappingURL=color-value-converters.js.map