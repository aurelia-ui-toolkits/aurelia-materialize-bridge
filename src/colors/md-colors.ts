import * as au from "../aurelia";
import { shadeBlendConvert } from "./shade-blend-convert";

@au.customElement("md-colors")
export class MdColors {
	@au.bindable
	primaryColor: string;

	@au.bindable
	accentColor: string;

	@au.bindable
	errorColor: string = "#F44336";

	@au.bindable
	successColor: string = "#26A69A";

	toRgb(hex: string, lightenDarken?: number) {
		if (lightenDarken) {
			hex = shadeBlendConvert(0.3 * lightenDarken, hex);
		}
		let r = parseInt(hex.substring(1, 3), 16);
		let g = parseInt(hex.substring(3, 5), 16);
		let b = parseInt(hex.substring(5), 16);
		return `${r},${g},${b}`;
	}
}
