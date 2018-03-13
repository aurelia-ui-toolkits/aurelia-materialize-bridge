import { AttributeManager } from "../common/attributeManager";
export declare class MdBadge {
    private element;
    constructor(element: Element);
    isNew: boolean | string;
    isNewChanged(newValue: any): void;
    caption: string;
    captionChanged(newValue: any): void;
    attributeManager: AttributeManager;
    attached(): void;
    detached(): void;
}
