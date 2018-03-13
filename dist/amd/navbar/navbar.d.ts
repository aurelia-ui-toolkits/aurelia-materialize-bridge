import { AttributeManager } from "../common/attributeManager";
export declare class MdNavbar {
    private element;
    constructor(element: Element);
    fixedAnchor: HTMLDivElement;
    nav: HTMLElement;
    mdExtended: any;
    mdFixed: any;
    mdAutoHeight: any;
    fixedAttributeManager: AttributeManager;
    navAttributeManager: AttributeManager;
    attached(): void;
    detached(): void;
}
