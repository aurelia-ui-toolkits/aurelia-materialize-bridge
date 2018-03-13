import { AttributeManager } from "../common/attributeManager";
export declare class MdButton {
    private element;
    disabled: boolean | string;
    disabledChanged(newValue: boolean | string): void;
    flat: boolean | string;
    flatChanged(newValue: boolean | string): void;
    floating: boolean;
    large: boolean;
    pulse: boolean | string;
    pulseChanged(newValue: any): void;
    constructor(element: Element);
    attributeManager: AttributeManager;
    attached(): void;
    detached(): void;
}
