import * as au from "../aurelia";
export declare class MdFadeinImage {
    private element;
    constructor(element: Element);
    log: au.Logger;
    ref: HTMLElement;
    attached(): void;
    detached(): void;
    fadeInImage(): void;
    ensureOpacity(): void;
}
