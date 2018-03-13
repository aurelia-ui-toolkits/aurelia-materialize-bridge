export declare class MdTimePicker {
    constructor(element: Element);
    element: HTMLInputElement;
    twelveHour: boolean | string;
    value: string;
    bind(): void;
    attached(): void;
    detached(): void;
    updateFromElement(): void;
    valueChanged(newValue: any): void;
}
