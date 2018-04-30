export declare class MdPagination {
    private element;
    constructor(element: Element);
    mdActivePage: number;
    mdPages: number;
    mdPagesChanged(): void;
    mdVisiblePageLinks: number;
    mdVisiblePageLinksChanged(): void;
    mdPageLinks: number[];
    mdShowFirstLast: boolean;
    mdShowPrevNext: boolean;
    mdShowPageLinks: boolean;
    bind(): void;
    setActivePage(page: number): void;
    setFirstPage(): void;
    setLastPage(): void;
    setPreviousPage(): void;
    setNextPage(): void;
    generatePageLinks(): number[];
}
