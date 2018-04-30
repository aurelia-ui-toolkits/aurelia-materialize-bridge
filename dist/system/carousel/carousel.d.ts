import * as au from "../aurelia";
export declare class MdCarousel {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    mdIndicators: boolean;
    mdFullWidth: boolean;
    mdDuration: number;
    mdDist: number;
    mdShift: number;
    mdPadding: number;
    mdNumVisible: number;
    mdNoWrap: boolean;
    items: Element[];
    itemsChanged(): void;
    instance: M.Carousel;
    attached(): void;
    detached(): void;
    refresh(): void;
    next(n?: number): void;
    prev(n?: number): void;
    set(n?: number): void;
}
