import * as au from "../aurelia";
export declare class MdFab {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    direction: "top" | "right" | "buttom" | "left";
    hoverEnabled: boolean;
    toolbarEnabled: boolean;
    instance: M.FloatingActionButton;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
}
