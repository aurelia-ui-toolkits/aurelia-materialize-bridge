import * as au from "../aurelia";
export declare class MdTapTarget {
    private element;
    constructor(element: Element);
    static controlId: number;
    log: au.Logger;
    mdRef: HTMLElement;
    instance: M.TapTarget;
    bind(): void;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
}
