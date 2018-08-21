import * as au from "../aurelia";
export declare class MdChips {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    log: au.Logger;
    autocompleteData: M.AutocompleteData;
    data: M.ChipData[];
    dataChanged(newValue: any[], oldValue: any[]): void;
    placeholder: string;
    secondaryPlaceholder: string;
    limit: number;
    instance: M.Chips;
    bind(): void;
    attached(): void;
    detached(): void;
    refresh(): void;
}
