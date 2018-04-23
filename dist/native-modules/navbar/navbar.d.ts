import { AttributeManager } from "../common/attributeManager";
export declare class MdNavbar {
    private element;
    constructor(element: Element);
    fixedAnchor: HTMLDivElement;
    nav: HTMLElement;
    mdExtended: boolean;
    mdFixed: boolean;
    mdAutoHeight: boolean;
    fixedAttributeManager: AttributeManager;
    navAttributeManager: AttributeManager;
    attached(): void;
    detached(): void;
}
