import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";
export declare class MdWaves {
    private element;
    private configBuilder;
    constructor(element: Element, configBuilder: ConfigBuilder);
    attributeManager: au.AttributeManager;
    circle: boolean;
    color: string;
    attached(): void;
    detached(): void;
}
