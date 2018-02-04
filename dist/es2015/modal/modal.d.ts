import { Logger } from "aurelia-logging";
import { AttributeManager } from "../common/attributeManager";
export declare class MdModal {
    private element;
    constructor(element: Element);
    log: Logger;
    attributeManager: AttributeManager;
    dismissible: boolean | string;
    opacity: number | string;
    inDuration: number | string;
    outDuration: number | string;
    startingTop: string;
    endingTop: string;
    attached(): void;
    detached(): void;
    onComplete(): void;
    onReady(modal: any, trigger: any): void;
    open(): void;
    close(): void;
}
