export declare class MdSwitch {
    private element;
    constructor(element: Element);
    checkbox: HTMLInputElement;
    checked: boolean;
    checkedChanged(newValue: any): void;
    disabled: boolean;
    readonly: boolean;
    labelOff: string;
    labelOn: string;
    attached(): void;
    detached(): void;
    handleChange: () => void;
    blur(): void;
}
