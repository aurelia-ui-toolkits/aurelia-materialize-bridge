import { ValidateResult } from "aurelia-validation";
export declare class MaterializeFormValidationRenderer {
    className: string;
    classNameFirst: string;
    pushElementResult(elementResults: Map<Element, ValidateResult[]>, element: Element, result: ValidateResult): void;
    render(instruction: any): void;
    defaultUnrenderValidateResults(element: any, results: any): void;
    defaultRenderValidateResults(element: any, results: any): void;
    addMessage(element: any, result: any): void;
    removeMessage(element: any, result: any): void;
    removeValidationClasses(input: any): void;
    addValidationClasses(input: any, isValid: any): void;
}
