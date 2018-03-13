import { AttributeManager } from "../common/attributeManager";
export declare class MdModalTrigger {
    private element;
    dismissible: boolean;
    constructor(element: Element);
    attributeManager: AttributeManager;
    attached(): void;
    detached(): void;
    onComplete(): void;
}
