export declare class MdTooltip {
    private element;
    constructor(element: Element);
    position: "top" | "right" | "bottom" | "left";
    delay: number;
    html: string;
    textChanged(): void;
    instance: M.Tooltip;
    attached(): void;
    detached(): void;
    initTooltip(): void;
}
