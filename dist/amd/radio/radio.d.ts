import * as au from "../aurelia";
export declare class MdRadio {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: au.AttributeManager;
    radio: HTMLInputElement;
    mdChecked: boolean | string;
    mdDisabled: boolean;
    mdDisabledChanged(newValue: boolean): void;
    mdReadonly: boolean;
    mdGap: boolean;
    mdModel: any;
    mdName: string;
    mdValue: string;
    attached(): void;
    detached(): void;
}
