export declare class MdRange {
    private element;
    constructor(element: Element);
    input: HTMLInputElement;
    mdReadonly: boolean;
    mdMin: number;
    mdMax: number;
    mdStep: number;
    mdValue: number;
    instance: M.Range;
    attached(): void;
    detached(): void;
}
