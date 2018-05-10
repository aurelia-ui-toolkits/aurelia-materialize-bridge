import { MaterializeFormValidationRenderer } from "../validation/validationRenderer";
import { ValidateResult } from "aurelia-validation";
import { MdInput } from "../input/input";
import { MdCheckbox } from "../checkbox/checkbox";
import { MdSelect } from "../select/select";
import { MdDropdown } from "../dropdown/dropdown";

export interface IController<T> {
	viewModel: T;
}

export interface IElementAu {
	"md-input": IController<MdInput>;
	"md-checkbox": IController<MdCheckbox>;
	"md-select": IController<MdSelect>;
	"md-dropdown": IController<MdDropdown>;
}

declare global {
	// tslint:disable-next-line:interface-name
	interface Element {
		mdUnrenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer);
		mdRenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer);
		au: IElementAu;
	}
}
