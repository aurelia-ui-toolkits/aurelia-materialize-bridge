import { TaskQueue } from "aurelia-task-queue";
export declare class MdCarousel {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: TaskQueue);
    mdIndicators: boolean | string;
    mdSlider: boolean | string;
    items: Element[];
    attached(): void;
    detached(): void;
    itemsChanged(newValue: any): void;
    refresh(): void;
}
