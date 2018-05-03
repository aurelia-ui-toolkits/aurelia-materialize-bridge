import * as au from "../aurelia";
export declare class MdCheckbox {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: au.AttributeManager;
    checkbox: HTMLInputElement;
    checked: boolean | any[];
    disabled: boolean;
    disabledChanged(newValue: any): void;
    readonly: boolean;
    readonlyChanged(): void;
    filledIn: boolean;
    matcher: (a: any, b: any) => boolean;
    model: any;
    attached(): void;
    detached(): void;
    preventChange(this: HTMLInputElement): void;
}
