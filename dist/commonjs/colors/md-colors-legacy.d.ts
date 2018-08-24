import * as au from "../aurelia";
export declare class MdColorsLegacy {
    private cs;
    private bindingEngine;
    constructor(cs: au.MdColorsService, bindingEngine: au.BindingEngine);
    primaryColor: string;
    primaryColorChanged(): void;
    accentColor: string;
    accentColorChanged(): void;
    errorColor: string;
    errorColorChanged(): void;
    successColor: string;
    successColorChanged(): void;
    subscriptions: au.Disposable[];
    attached(): void;
    detached(): void;
}
