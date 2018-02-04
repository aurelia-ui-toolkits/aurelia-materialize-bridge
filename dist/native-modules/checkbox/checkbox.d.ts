import { AttributeManager } from "../common/attributeManager";
export declare class MdCheckbox {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: AttributeManager;
    checkbox: HTMLInputElement;
    mdChecked: boolean | any[];
    mdDisabled: boolean | string;
    mdDisabledChanged(newValue: any): void;
    mdReadonly: boolean;
    mdReadonlyChanged(): void;
    mdFilledIn: boolean | string;
    mdMatcher: (a: any, b: any) => boolean;
    mdModel: any;
    attached(): void;
    detached(): void;
    preventChange(this: HTMLInputElement): void;
}
