export declare class MdRange {
    private element;
    constructor(element: Element);
    input: HTMLInputElement;
    readonly: boolean;
    min: number;
    max: number;
    step: number;
    value: number;
    instance: M.Range;
    attached(): void;
    detached(): void;
}
