import * as au from "../aurelia";
export declare class MdTabs {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    attributeManager: au.AttributeManager;
    tabAttributeManagers: au.AttributeManager[];
    fixed: boolean;
    fixedChanged(newValue: any): void;
    responsiveThreshold: number;
    swipeable: boolean;
    transparent: boolean;
    transparentChanged(newValue: any): void;
    instance: M.Tabs;
    attached(): void;
    detached(): void;
    refresh(): void;
    updateTabIndicator(): void;
    fireTabSelectedEvent: (e: Event) => void;
    select(id: string): void;
    readonly selectedTab: number;
}
