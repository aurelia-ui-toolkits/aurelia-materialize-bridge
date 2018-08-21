export declare class MdProgress {
    private element;
    constructor(element: Element);
    wrapper: HTMLDivElement;
    color: string;
    pixelSize?: number;
    pixelSizeChanged(newValue: number): void;
    size: "big" | "default" | "small";
    sizeChanged(newValue: any): void;
    type: "linear" | "circular";
    value: number;
    bind(): void;
    attached(): void;
}
