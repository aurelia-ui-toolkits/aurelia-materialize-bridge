export declare class MdPagination {
    private element;
    constructor(element: Element);
    activePage: number;
    pages: number;
    pagesChanged(): void;
    visiblePageLinks: number;
    visiblePageLinksChanged(): void;
    pageLinks: number[];
    showFirstLast: boolean;
    showPrevNext: boolean;
    showPageLinks: boolean;
    bind(): void;
    setActivePage(page: number): void;
    setFirstPage(): void;
    setLastPage(): void;
    setPreviousPage(): void;
    setNextPage(): void;
    generatePageLinks(): number[];
}
