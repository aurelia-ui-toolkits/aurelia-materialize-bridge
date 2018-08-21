import { ValidateResult, RenderInstruction } from "aurelia-validation";
export declare class MaterializeFormValidationRenderer {
    static validationMessageClass: string;
    pushElementResult(elementResults: Map<Element, ValidateResult[]>, element: Element, result: ValidateResult): void;
    render(instruction: RenderInstruction): void;
    defaultUnrenderValidateResults(element: Element, results: ValidateResult[]): void;
    defaultRenderValidateResults(element: Element, results: ValidateResult[]): void;
    addMessage(element: Element, result: ValidateResult): void;
    removeMessage(element: Element, result: ValidateResult): void;
    removeValidationClasses(input: Element): void;
    addValidationClasses(input: Element, isValid: boolean): void;
    static removeValidation(validationContainer: HTMLElement, input: HTMLInputElement): void;
}
