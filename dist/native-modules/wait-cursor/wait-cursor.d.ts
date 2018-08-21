import * as au from "../aurelia";
export declare class MdWaitCursorCustomAttribute {
    private element;
    private templatingEngine;
    constructor(element: Element, templatingEngine: au.TemplatingEngine);
    progress: HTMLElement;
    value: boolean;
    valueChanged(newVal: boolean): void;
    trResizeDelegate: () => any;
    attached(): void;
    attachedMdInput(): void;
    attachedButton(): void;
    attachedLi(): void;
    attachedTr(): void;
    detached(): void;
}
