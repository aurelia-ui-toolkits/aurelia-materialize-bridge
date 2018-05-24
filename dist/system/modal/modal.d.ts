import * as au from "../aurelia";
export declare class MdModal {
    private element;
    constructor(element: Element);
    log: au.Logger;
    attributeManager: au.AttributeManager;
    opacity: number;
    inDuration: number;
    outDuration: number;
    preventScrolling: boolean;
    dismissible: boolean;
    startingTop: string;
    endingTop: string;
    fixedFooter: boolean;
    fixedFooterChanged(): void;
    bottomSheet: boolean;
    instance: M.Modal;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
}
