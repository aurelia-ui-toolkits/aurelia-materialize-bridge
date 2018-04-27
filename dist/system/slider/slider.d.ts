import * as au from "../aurelia";
export declare class MdSlider {
    private element;
    constructor(element: Element);
    log: au.Logger;
    mdFillContainer: boolean;
    mdHeight: number;
    mdIndicators: boolean;
    mdIndicatorsChanged(): void;
    mdInterval: number;
    mdDuration: number;
    instance: M.Slider;
    attached(): void;
    detached(): void;
    pause(): void;
    start(): void;
    next(): void;
    prev(): void;
    refresh(): void;
}
