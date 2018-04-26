export declare class MdSwitch {
    private element;
    constructor(element: Element);
    checkbox: HTMLInputElement;
    mdChecked: boolean;
    mdCheckedChanged(newValue: any): void;
    mdDisabled: boolean;
    mdReadonly: boolean;
    mdLabelOff: string;
    mdLabelOn: string;
    attached(): void;
    detached(): void;
    handleChange: () => void;
    blur(): void;
}
