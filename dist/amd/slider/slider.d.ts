import { Logger } from "aurelia-logging";
export declare class MdSlider {
    private element;
    constructor(element: Element);
    log: Logger;
    mdFillContainer: boolean | string;
    mdHeight: number | string;
    mdIndicators: boolean | string;
    mdInterval: number | string;
    mdTransition: number | string;
    attached(): void;
    pause(): void;
    start(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    mdIndicatorsChanged(): void;
}
