import { MdSidenav } from "./sidenav";
export declare class MdSidenavCollapse {
    private element;
    constructor(element: Element);
    ref: MdSidenav;
    attached(): void;
    detached(): void;
    click: () => void;
}
