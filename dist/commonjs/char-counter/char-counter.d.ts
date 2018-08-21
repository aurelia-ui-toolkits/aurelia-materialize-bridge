import * as au from "../aurelia";
export declare class MdCharCounter {
    private element;
    constructor(element: Element);
    attributeManager: au.AttributeManager;
    length: number;
    instances: M.CharacterCounter[];
    attached(): void;
    detached(): void;
}
