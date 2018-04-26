/// <reference types="materialize-css" />
export declare class MdTooltip {
    private element;
    constructor(element: Element);
    position: "top" | "right" | "bottom" | "left";
    delay: number;
    text: string;
    textChanged(): void;
    instance: M.Tooltip;
    attached(): void;
    detached(): void;
    initTooltip(): void;
}
