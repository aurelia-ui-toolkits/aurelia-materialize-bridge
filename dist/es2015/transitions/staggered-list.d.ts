import { Logger } from "aurelia-logging";
export declare class MdStaggeredList {
    private element;
    constructor(element: Element);
    log: Logger;
    ref: HTMLElement;
    attached(): void;
    detached(): void;
    staggerList(): void;
    ensureOpacity(): void;
}
