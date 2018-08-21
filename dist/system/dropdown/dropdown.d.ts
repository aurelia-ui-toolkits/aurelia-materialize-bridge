import * as au from "../aurelia";
export declare class MdDropdown {
    private element;
    constructor(element: Element);
    static elementId: number;
    id: string;
    attributeManager: au.AttributeManager;
    contentAttributeManager: au.AttributeManager;
    activates: string;
    ref: Element;
    alignment: "left" | "right";
    autoTrigger: boolean;
    constrainWidth: boolean;
    container: Element | string;
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
    handleActivateElement(): void;
}
