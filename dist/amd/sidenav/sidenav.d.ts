import { AttributeManager } from "../common/attributeManager";
import { Logger } from "aurelia-logging";
export declare class MdSidenav {
    element: Element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    log: Logger;
    sidenav: HTMLDivElement;
    attributeManager: AttributeManager;
    mdCloseOnClick: boolean | string;
    mdEdge: string;
    mdFixed: boolean | string;
    mdWidth: number | string;
    attachedResolver: () => void;
    whenAttached: Promise<void>;
    attached(): void;
    detached(): void;
    mdFixedChanged(newValue: any): void;
}
