import { AttributeManager } from "../common/attributeManager";
export declare class MdDropdown {
    private element;
    constructor(element: Element);
    static elementId: number;
    id: string;
    attributeManager: AttributeManager;
    contentAttributeManager: AttributeManager;
    activates: string;
    ref: Element;
    alignment: string;
    belowOrigin: boolean | string;
    constrainWidth: boolean | string;
    gutter: number | string;
    hover: boolean;
    mdTitle: string;
    inDuration: number | string;
    outDuration: number | string;
    stopPropagation: boolean;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
    handleActivateElement(): void;
}
