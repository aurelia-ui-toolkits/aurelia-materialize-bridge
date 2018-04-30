import * as au from "../aurelia";
export declare class MdBreadcrumbs {
    private element;
    private aureliaRouter;
    constructor(element: Element, aureliaRouter: au.Router);
    router: au.Router;
    childRouter: au.Router;
    bind(): void;
    navigate(navigationInstruction: au.NavigationInstruction): void;
}
