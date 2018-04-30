export declare class MdProgress {
    private element;
    constructor(element: Element);
    wrapper: HTMLDivElement;
    mdColor: string;
    mdPixelSize?: number;
    mdPixelSizeChanged(newValue: number): void;
    mdSize: "big" | "default" | "small";
    mdSizeChanged(newValue: any): void;
    mdType: "linear" | "circular";
    mdValue: number;
    bind(): void;
    attached(): void;
}
