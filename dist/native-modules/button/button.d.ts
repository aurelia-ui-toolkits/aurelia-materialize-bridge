import * as au from "../aurelia";
export declare class MdButton {
    private element;
    constructor(element: Element);
    attributeManager: au.AttributeManager;
    disabled: boolean;
    disabledChanged(): void;
    flat: boolean;
    flatChanged(): void;
    floating: boolean;
    large: boolean;
    small: boolean;
    pulse: boolean;
    pulseChanged(): void;
    attached(): void;
    detached(): void;
}
