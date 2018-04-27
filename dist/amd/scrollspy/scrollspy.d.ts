export declare class MdScrollSpy {
    private element;
    constructor(element: Element);
    instance: M.ScrollSpy;
    throttle: number;
    scrollOffset: number;
    activeClass: string;
    getActiveElement: (id: string) => string;
    attached(): void;
    detached(): void;
}
