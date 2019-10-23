import * as au from "../aurelia";
export declare class MdInput {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    static id: number;
    controlId: string;
    labelEl: HTMLLabelElement;
    input: HTMLInputElement;
    inputField: HTMLDivElement;
    label: string;
    blurOnEnter: boolean;
    disabled: boolean;
    readonly: boolean;
    placeholder: string;
    textArea: boolean;
    type: string;
    step: string;
    validate: boolean;
    showErrortext: boolean;
    inline: boolean;
    updateTrigger: string[];
    validateError: string;
    validateSuccess: string;
    value: string;
    valueChanged(): void;
    min: string;
    max: string;
    name: string;
    maxlength: number;
    autocomplete: string;
    suspendUpdate: boolean;
    bind(): void;
    attached(): void;
    detached(): void;
    updateLabel(): void;
    blur(): void;
    focus(): void;
    attachEventHandlers(): void;
    detachEventHandlers(): void;
    blurOnEnterHandler: (e: any) => void;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}
