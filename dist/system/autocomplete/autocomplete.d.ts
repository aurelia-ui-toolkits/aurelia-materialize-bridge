export declare class MdAutoComplete {
    private element;
    constructor(element: Element);
    input: Element;
    limit: number;
    minLength: number;
    values: any;
    valuesChanged(): void;
    instance: M.Autocomplete;
    bind(): void;
    attached(): void;
    detached(): void;
}
