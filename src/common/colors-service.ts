import { shadeBlendConvert } from "./shade-blend-convert";

export class MdColorsService {
	primaryColor: string = "#e57373";
	accentColor: string = "#26a69a";
	errorColor: string = "#F44336";
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
