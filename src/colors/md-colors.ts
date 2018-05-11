import * as au from "../aurelia";
import { shadeBlendConvert } from "./shade-blend-convert";

@au.customElement("md-colors")
export class MdColors {
	@au.bindable
	primaryColor: string = "#e57373";

	@au.bindable
	accentColor: string = "#26a69a";

	@au.bindable
	errorColor: string = "#F44336";

	@au.bindable
	successColor: string = "#4CAF50";

	toRgb(hex: string, lightenDarken?: number) {
		if (!hex) {
			return hex;
		}
		if (lightenDarken) {
			hex = shadeBlendConvert(0.3 * lightenDarken, hex);
		}
		let r = parseInt(hex.substring(1, 3), 16);
		let g = parseInt(hex.substring(3, 5), 16);
		let b = parseInt(hex.substring(5), 16);
		return `${r},${g},${b}`;
	}
}
