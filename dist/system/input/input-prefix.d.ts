import { AttributeManager } from "../common/attributeManager";
export declare class MdPrefix {
    private element;
    constructor(element: Element);
    attributeManager: AttributeManager;
    bind(): void;
    unbind(): void;
}
