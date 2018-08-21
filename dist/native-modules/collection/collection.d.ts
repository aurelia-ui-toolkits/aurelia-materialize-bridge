export declare class MdCollection {
    private element;
    constructor(element: Element);
    anchor: HTMLDivElement;
    attached(): void;
    getSelected(): any[];
    clearSelection(): void;
    selectAll(): void;
    toggleIndex(index: any): void;
}
