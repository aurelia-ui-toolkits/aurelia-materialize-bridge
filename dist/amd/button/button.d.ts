import { AttributeManager } from "../common/attributeManager";
export declare class MdButton {
    private element;
    constructor(element: Element);
    attributeManager: AttributeManager;
    disabled: boolean;
    disabledChanged(newValue: boolean): void;
    flat: boolean;
    flatChanged(newValue: boolean): void;
    floating: boolean;
    large: boolean;
    small: boolean;
    pulse: boolean;
    pulseChanged(newValue: boolean): void;
    attached(): void;
    detached(): void;
}
