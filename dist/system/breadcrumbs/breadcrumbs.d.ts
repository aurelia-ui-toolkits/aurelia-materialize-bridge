import { NavigationInstruction, Router } from "aurelia-router";
export declare class MdBreadcrumbs {
    private element;
    private aureliaRouter;
    constructor(element: Element, aureliaRouter: Router);
    router: Router;
    childRouter: Router;
    bind(): void;
    navigate(navigationInstruction: NavigationInstruction): void;
}
