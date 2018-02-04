import { AttributeManager } from "../common/attributeManager";
export declare class MdBox {
    private element;
    constructor(element: Element);
    attributeManager: AttributeManager;
    caption: any;
    attached(): void;
    detached(): void;
}
