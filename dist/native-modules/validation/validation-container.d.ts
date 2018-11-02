import * as au from "../aurelia";
export declare class ValidationContainer {
    private element;
    private coloursService;
    constructor(element: Element, coloursService: au.MdColorsService);
    containerDiv: HTMLDivElement;
    showSuccess: boolean;
    attached(): void;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}
