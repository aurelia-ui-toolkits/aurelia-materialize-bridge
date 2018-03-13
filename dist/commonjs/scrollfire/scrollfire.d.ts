import { Logger } from "aurelia-logging";
export declare class MdScrollfire {
    private element;
    constructor(element: Element);
    log: Logger;
    targetId: number;
    attached(): void;
}
