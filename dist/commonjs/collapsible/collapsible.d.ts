import * as au from "../aurelia";
export declare class MdCollapsible {
    private element;
    constructor(element: Element);
    attributeManager: au.AttributeManager;
    accordion: boolean;
    accordionChanged(): void;
    popout: boolean;
    inDuration: number;
    outDuration: number;
    instance: M.Collapsible;
    bind(): void;
    attached(): void;
    detached(): void;
    open(index?: number): void;
    close(index?: number): void;
}
