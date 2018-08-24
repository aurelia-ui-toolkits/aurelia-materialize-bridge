import { shadeBlendConvert } from "./shade-blend-convert";

export class MdColorsService {
	constructor() {
		this.updatePrimaryShades();
	}

	primaryColor: string = "#ee6e73";
	primaryColorLight: string;
	primaryColorDark: string;
	secondaryColor: string = "#26a69a";
	errorColor: string = "#f44336";
	successColor: string = "#4caf50";
	linkColor: string = "#039be5";

	updatePrimaryShades() {
		this.primaryColorLight = this.lighten(this.primaryColor, 15);
		this.primaryColorDark = this.darken(this.primaryColor, 15);
	}

	hexToRgb(hex: string): number[] {
		if (!hex || !hex.startsWith("#") || hex.length < 7) {
			return [0, 0, 0];
		}
		return [parseInt(hex.substring(1, 3), 16), parseInt(hex.substring(3, 5), 16), parseInt(hex.substring(5), 16)];
	}

	rgbToHex([r, g, b]: number[]): string {
		return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
	}

	toRgb(hex: string, lightenDarken?: number): string {
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

	rgba(hex: string, alpha: number): string {
		let [r, g, b] = this.hexToRgb(hex);
		return `rgba(${r},${g},${b},${alpha})`;
	}

	lighten(hex: string, amount: number): string {
		let rgb = this.hexToRgb(hex);
		let hsl = this.rgbToHsl(rgb);
		hsl[2] += amount / 100;
		rgb = this.hslToRgb(hsl);
		return this.rgbToHex(rgb);
	}

	darken(hex: string, amount: number): string {
		return this.lighten(hex, -amount);
	}

	transparentize(hex: string, amount: number): string {
		return this.rgba(hex, 1 - amount);
	}

	desaturate(hex: string, amount: number): string {
		let rgb = this.hexToRgb(hex);
		let hsl = this.rgbToHsl(rgb);
		hsl[1] -= amount / 100;
		rgb = this.hslToRgb(hsl);
		return this.rgbToHex(rgb);
	}

	rgbToHsl([r, g, b]: number[]): number[] {
		r /= 255;
		g /= 255;
		b /= 255;
		let max = Math.max(r, g, b);
		let min = Math.min(r, g, b);
		let h: number;
		let s: number;
		let l = (max + min) / 2;

		if (max === min) {
			h = s = 0; // achromatic
		} else {
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}

		return [h, s, l];
	}

	hue2rgb(p: number, q: number, t: number): number {
		if (t < 0) { t += 1; }
		if (t > 1) { t -= 1; }
		if (t < 1 / 6) { return p + (q - p) * 6 * t; }
		if (t < 1 / 2) { return q; }
		if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
		return p;
	}

	hslToRgb([h, s, l]: number[]): number[] {
		let r: number;
		let g: number;
		let b: number;

		if (s === 0) {
			r = g = b = l; // achromatic
		} else {
			let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			let p = 2 * l - q;
			r = this.hue2rgb(p, q, h + 1 / 3);
			g = this.hue2rgb(p, q, h);
			b = this.hue2rgb(p, q, h - 1 / 3);
		}

		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}
}
