export declare class MdDropdownElement {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    alignment: "left" | "right";
    autoTrigger: boolean;
    constrainWidth: boolean;
    container: Element;
    coverTrigger: boolean;
    closeOnClick: boolean;
    hover: boolean;
    title: string;
    inDuration: number;
    outDuration: number;
    instance: M.Dropdown;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
    recalculateDimensions(): void;
}
