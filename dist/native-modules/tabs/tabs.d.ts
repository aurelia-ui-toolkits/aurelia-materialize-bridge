import { TaskQueue } from "aurelia-task-queue";
import { AttributeManager } from "../common/attributeManager";
export declare class MdTabs {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: TaskQueue);
    attributeManager: AttributeManager;
    tabAttributeManagers: AttributeManager[];
    fixed: boolean | string;
    onShow: (event: any) => void;
    responsiveThreshold: number | string;
    swipeable: boolean | string;
    transparent: boolean | string;
    attached(): void;
    detached(): void;
    refresh(): void;
    fixedChanged(newValue: any): void;
    transparentChanged(newValue: any): void;
    fireTabSelectedEvent(e: any): void;
    selectTab(id: number): void;
    readonly selectedTab: {
        href: any;
        index: number;
    };
}
