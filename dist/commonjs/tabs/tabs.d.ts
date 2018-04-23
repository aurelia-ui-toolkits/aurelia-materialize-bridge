import { TaskQueue } from "aurelia-task-queue";
import { AttributeManager } from "../common/attributeManager";
export declare class MdTabs {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: TaskQueue);
    attributeManager: AttributeManager;
    tabAttributeManagers: AttributeManager[];
    fixed: boolean;
    fixedChanged(newValue: any): void;
    onShow: (this: M.Tabs, newContent: Element) => void;
    responsiveThreshold: number;
    swipeable: boolean;
    transparent: boolean;
    transparentChanged(newValue: any): void;
    instance: M.Tabs;
    attached(): void;
    detached(): void;
    updateTabIndicator(): void;
    fireTabSelectedEvent: (e: Event) => void;
    select(id: string): void;
    readonly selectedTab: number;
}
