export declare class MdSwitch {
    private element;
    constructor(element: Element);
    checkbox: HTMLInputElement;
    mdChecked: boolean | string;
    mdCheckedChanged(newValue: any): void;
    mdDisabled: boolean | string;
    mdDisabledChanged(newValue: any): void;
    mdReadonly: boolean | string;
    mdLabelOff: string;
    mdLabelOn: string;
    attached(): void;
    detached(): void;
    handleChange(): void;
    blur(): void;
}
