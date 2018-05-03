import * as au from "../aurelia";
export declare class MdSlider {
    private element;
    constructor(element: Element);
    log: au.Logger;
    fillContainer: boolean;
    height: number;
    indicators: boolean;
    indicatorsChanged(): void;
    interval: number;
    duration: number;
    instance: M.Slider;
    attached(): void;
    detached(): void;
    pause(): void;
    start(): void;
    next(): void;
    prev(): void;
    refresh(): void;
}
