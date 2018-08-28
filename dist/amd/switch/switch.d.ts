export declare class MdSwitch {
    private element;
    constructor(element: Element);
    checkbox: HTMLInputElement;
    checked: boolean;
    checkedChanged(newValue: boolean): void;
    disabled: boolean;
    disabledChanged(): void;
    readonly: boolean;
    labelOff: string;
    labelOn: string;
    attached(): void;
    detached(): void;
    handleChange: () => void;
    blur(): void;
}
