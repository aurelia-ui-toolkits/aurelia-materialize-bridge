import { AttributeManager } from "../common/attributeManager";
export declare class MdRadio {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: AttributeManager;
    radio: HTMLInputElement;
    mdChecked: boolean | string;
    mdDisabled: boolean | string;
    mdDisabledChanged(newValue: boolean | string): void;
    mdReadonly: boolean | string;
    mdGap: boolean | string;
    mdModel: any;
    mdName: string;
    mdValue: string;
    attached(): void;
    detached(): void;
}
