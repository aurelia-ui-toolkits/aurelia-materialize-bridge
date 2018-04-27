import * as au from "../aurelia";
export declare class MdBadge {
    private element;
    constructor(element: Element);
    isNew: boolean;
    isNewChanged(): void;
    caption: string;
    captionChanged(): void;
    attributeManager: au.AttributeManager;
    attached(): void;
    detached(): void;
}
