/// <reference types="materialize-css" />
export declare class MdDropdownElement {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    alignment: string;
    autoTrigger: boolean;
    constrainWidth: boolean;
    container: Element;
    coverTrigger: boolean;
    closeOnClick: boolean;
    hover: boolean;
    mdTitle: string;
    inDuration: number;
    outDuration: number;
    instance: M.Dropdown;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
    recalculateDimensions(): void;
}
