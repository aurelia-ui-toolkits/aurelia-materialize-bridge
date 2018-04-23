import { MdSidenav } from "./sidenav";
export declare class MdSidenavCollapse {
    private element;
    constructor(element: Element);
    ref: MdSidenav;
    isOpen: boolean;
    attached(): Promise<void>;
    click(): void;
}
