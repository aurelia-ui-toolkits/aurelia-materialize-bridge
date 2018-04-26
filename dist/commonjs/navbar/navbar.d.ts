import * as au from "../aurelia";
export declare class MdNavbar {
    private element;
    constructor(element: Element);
    fixedAnchor: HTMLDivElement;
    nav: HTMLElement;
    mdExtended: boolean;
    mdFixed: boolean;
    mdAutoHeight: boolean;
    fixedAttributeManager: au.AttributeManager;
    navAttributeManager: au.AttributeManager;
    attached(): void;
    detached(): void;
}
