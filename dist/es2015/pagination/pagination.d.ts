export declare class MdPagination {
    private element;
    constructor(element: Element);
    mdActivePage: number;
    mdPages: number | string;
    mdVisiblePageLinks: number | string;
    mdPageLinks: number[];
    mdShowFirstLast: boolean | string;
    mdShowPrevNext: boolean | string;
    mdShowPageLinks: boolean | string;
    numberOfLinks: number;
    pages: number;
    bind(): void;
    setActivePage(page: any): void;
    setFirstPage(): void;
    setLastPage(): void;
    setPreviousPage(): void;
    setNextPage(): void;
    mdPagesChanged(): void;
    mdVisiblePageLinksChanged(): void;
    generatePageLinks(): number[];
}
