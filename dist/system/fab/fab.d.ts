/// <reference types="materialize-css" />
import * as au from "../aurelia";
export declare class MdFab {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    mdDirection: "top" | "right" | "buttom" | "left";
    mdHoverEnabled: boolean;
    toolbarEnabled: boolean;
    instance: M.FloatingActionButton;
    attached(): void;
    detached(): void;
    open(): void;
    close(): void;
}
