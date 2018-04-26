/// <reference types="materialize-css" />
import * as au from "../aurelia";
export declare class MdSidenav {
    element: Element;
    constructor(element: Element);
    static fixedClass: string;
    static id: number;
    controlId: string;
    sidenav: HTMLDivElement;
    instance: M.Sidenav;
    attributeManager: au.AttributeManager;
    options: M.SidenavOptions;
    mdFixed: boolean;
    mdFixedChanged(newValue: any): void;
    attached(): void;
    open(): void;
    close(): void;
    detached(): void;
}
