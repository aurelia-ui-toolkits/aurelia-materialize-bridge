export declare class MdColorsService {
    constructor();
    primaryColor: string;
    primaryColorLight: string;
    primaryColorDark: string;
    secondaryColor: string;
    errorColor: string;
    successColor: string;
    linkColor: string;
    updatePrimaryShades(): void;
    hexToRgb(hex: string): number[];
    rgbToHex([r, g, b]: number[]): string;
    toRgb(hex: string, lightenDarken?: number): string;
    rgba(hex: string, alpha: number): string;
    lighten(hex: string, amount: number): string;
    darken(hex: string, amount: number): string;
    transparentize(hex: string, amount: number): string;
    desaturate(hex: string, amount: number): string;
    rgbToHsl([r, g, b]: number[]): number[];
    hue2rgb(p: number, q: number, t: number): number;
    hslToRgb([h, s, l]: number[]): number[];
}
