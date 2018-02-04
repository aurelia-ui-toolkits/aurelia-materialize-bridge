export declare class MdAutoComplete {
    private element;
    constructor(element: Element);
    input: Element;
    limit: number;
    minLength: number;
    values: any;
    attached(): void;
    detached(): void;
    refresh(): void;
    valuesChanged(newValue: any): void;
}
