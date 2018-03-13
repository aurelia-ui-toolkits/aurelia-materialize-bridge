import { Logger } from "aurelia-logging";
import { MdSidenav } from "./sidenav";
export declare class MdSidenavCollapse {
    private element;
    constructor(element: Element);
    log: Logger;
    ref: MdSidenav;
    attached(): Promise<void>;
    detached(): void;
    show(): void;
    hide(): void;
    onShow(el: any): void;
    onHide(el: any): void;
}
