import * as au from "../aurelia";
export declare class MdColors {
    private cs;
    private bindingEngine;
    constructor(cs: au.MdColorsService, bindingEngine: au.BindingEngine);
    primaryColor: string;
    primaryColorChanged(): void;
    primaryColorLight: string;
    primaryColorDark: string;
    secondaryColor: string;
    secondaryColorChanged(): void;
    errorColor: string;
    errorColorChanged(): void;
    successColor: string;
    successColorChanged(): void;
    linkColor: string;
    linkColorChanged(): void;
    subscriptions: au.Disposable[];
    attached(): void;
    detached(): void;
}
