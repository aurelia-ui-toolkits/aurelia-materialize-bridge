import { AttributeManager } from "../common/attributeManager";
export declare class MdCharCounter {
    private element;
    constructor(element: Element);
    attributeManager: AttributeManager;
    length: number | string;
    attached(): void;
    detached(): void;
}
