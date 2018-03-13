export declare class MdProgress {
    private element;
    constructor(element: Element);
    wrapper: HTMLDivElement;
    mdColor: string;
    mdPixelSize?: number | string;
    mdPixelSizeChanged(newValue: number | string): void;
    mdSize: "big" | "default" | "small";
    mdType: "linear" | "circular";
    mdValue: number;
    bind(): void;
    attached(): void;
    mdSizeChanged(newValue: any): void;
}
