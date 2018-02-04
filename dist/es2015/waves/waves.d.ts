import { AttributeManager } from "../common/attributeManager";
import { ConfigBuilder } from "../config-builder";
export declare class MdWaves {
    private element;
    private configBuilder;
    constructor(element: Element, configBuilder: ConfigBuilder);
    attributeManager: AttributeManager;
    block: boolean | string;
    circle: boolean | string;
    color: string;
    attached(): void;
    detached(): void;
}
