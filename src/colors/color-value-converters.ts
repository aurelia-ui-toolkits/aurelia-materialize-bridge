import { shadeBlendConvert } from "../common/shade-blend-convert";

export class DarkenValueConverter {
	toView(value: string, steps: string) {
		return shadeBlendConvert(-0.3 * parseFloat(steps), value);
	}
}

// tslint:disable-next-line:max-classes-per-file
export class LightenValueConverter {
	toView(value: string, steps: string) {
		return shadeBlendConvert(0.3 * parseFloat(steps), value);
	}
}
