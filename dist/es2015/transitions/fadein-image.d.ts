import { Logger } from "aurelia-logging";
export declare class MdFadeinImage {
    private element;
    constructor(element: Element);
    log: Logger;
    ref: HTMLElement;
    attached(): void;
    detached(): void;
    fadeInImage(): void;
    ensureOpacity(): void;
}
