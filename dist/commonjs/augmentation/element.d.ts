import { MaterializeFormValidationRenderer } from "../validation/validationRenderer";
import { ValidateResult } from "aurelia-validation";
declare global  {
    interface Element {
        mdUnrenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer): any;
        mdRenderValidateResults(results: ValidateResult[], renderer: MaterializeFormValidationRenderer): any;
        au: {
            controller: {
                viewModel: {
                    input: Element;
                };
            };
        };
    }
}
