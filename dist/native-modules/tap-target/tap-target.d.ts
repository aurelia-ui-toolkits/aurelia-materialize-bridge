import { Logger } from "aurelia-logging";
export declare class MdTapTarget {
    private element;
    constructor(element: Element);
    static controlId: number;
    log: Logger;
    mdRef: HTMLElement;
    bind(): void;
    open(): void;
    close(): void;
}
