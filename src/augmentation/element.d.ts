import { MaterializeFormValidationRenderer } from "../validation/validationRenderer";
import { ValidateResult } from "aurelia-validation";

declare global {
	// tslint:disable-next-line:interface-name
	interface Element {
		mdUnrenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer);
		mdRenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer);
	}
}
