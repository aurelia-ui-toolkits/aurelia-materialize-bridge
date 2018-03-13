import { AttributeManager } from "../common/attributeManager";
export declare class MdCollapsible {
    private element;
    constructor(element: Element);
    attributeManager: AttributeManager;
    accordion: boolean | string;
    popout: boolean | string;
    onOpen: (element: Element) => {};
    onClose: (element: Element) => {};
    attached(): void;
    detached(): void;
    refresh(): void;
    accordionChanged(): void;
    buildCollapsibleOpenCloseCallbackHandler(handler: (element: Element) => {}): (targetElementJquery: JQuery<HTMLElement>) => void;
    open(index?: number): void;
    close(index?: number): void;
}
