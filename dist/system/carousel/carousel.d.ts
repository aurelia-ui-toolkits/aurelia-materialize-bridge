import * as au from "../aurelia";
export declare class MdCarousel {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    indicators: boolean;
    fullWidth: boolean;
    duration: number;
    dist: number;
    shift: number;
    padding: number;
    numVisible: number;
    noWrap: boolean;
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
