import * as au from "../aurelia";
export declare class MdRadio {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: au.AttributeManager;
    radio: HTMLInputElement;
    checked: boolean | string;
    disabled: boolean;
    disabledChanged(newValue: boolean): void;
    readonly: boolean;
    gap: boolean;
    model: any;
    name: string;
    value: string;
    attached(): void;
    detached(): void;
}
