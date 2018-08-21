import * as au from "../aurelia";
export declare class MdBox {
    private element;
    constructor(element: Element);
    attributeManager: au.AttributeManager;
    caption: string;
    inDuration: number;
    outDuration: number;
    instance: M.Materialbox;
    attached(): void;
    detached(): void;
}
