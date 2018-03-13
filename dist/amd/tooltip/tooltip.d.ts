import { AttributeManager } from "../common/attributeManager";
export declare class MdTooltip {
    private element;
    constructor(element: Element);
    position: string;
    delay: number | string;
    html: boolean | string;
    text: string;
    attributeManager: AttributeManager;
    bind(): void;
    attached(): void;
    detached(): void;
    textChanged(): void;
    initTooltip(): void;
}
