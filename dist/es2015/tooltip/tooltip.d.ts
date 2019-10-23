export declare class MdTooltip {
    private element;
    constructor(element: Element);
    position: "top" | "right" | "bottom" | "left";
    delay: number;
    html: string;
    htmlChanged(): void;
    instance: M.Tooltip;
    attached(): void;
    detached(): void;
    initTooltip(): void;
}
