/// <reference types="materialize-css" />
export declare class MdParallax {
    private element;
    constructor(element: Element);
    responsiveThreshold: number;
    instance: M.Parallax;
    attached(): void;
    detached(): void;
}
