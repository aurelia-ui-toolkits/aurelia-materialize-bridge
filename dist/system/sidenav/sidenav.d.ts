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
    edge: "left" | "right";
    draggable: boolean;
    inDuration: number;
    outDuration: number;
    fixed: boolean;
    fixedChanged(newValue: any): void;
    attached(): void;
    open(): void;
    close(): void;
    detached(): void;
}
