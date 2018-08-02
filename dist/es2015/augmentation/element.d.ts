import { MaterializeFormValidationRenderer } from "../validation/validationRenderer";
import { ValidateResult } from "aurelia-validation";
import { MdInput } from "../input/input";
import { MdCheckbox } from "../checkbox/checkbox";
import { MdSelect } from "../select/select";
import { MdDropdown } from "../dropdown/dropdown";
import { MdLookup } from "../lookup/lookup";
export interface IController<T> {
    viewModel: T;
}
export interface IElementAu {
    "md-input": IController<MdInput>;
    "md-checkbox": IController<MdCheckbox>;
    "md-select": IController<MdSelect>;
    "md-dropdown": IController<MdDropdown>;
    "md-lookup": IController<MdLookup>;
}
declare global {
    interface Element {
        mdUnrenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer): any;
        mdRenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer): any;
        au: IElementAu;
    }
}
