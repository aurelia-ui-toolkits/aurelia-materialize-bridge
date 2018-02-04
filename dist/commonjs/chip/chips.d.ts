import { Logger } from "aurelia-logging";
export declare class MdChips {
    private element;
    constructor(element: Element);
    log: Logger;
    autocompleteOptions: any;
    data: any[];
    dataChanged(newValue: any[], oldValue: any[]): void;
    placeholder: string;
    secondaryPlaceholder: string;
    attached(): void;
    detached(): void;
    refresh(): void;
    onChipAdd(e: any, chip: any): void;
    onChipDelete(e: any, chip: any): void;
    onChipSelect(e: any, chip: any): void;
}
