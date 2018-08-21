import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";
export declare class MdButton {
    private element;
    private configBuilder;
    constructor(element: Element, configBuilder: ConfigBuilder);
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
