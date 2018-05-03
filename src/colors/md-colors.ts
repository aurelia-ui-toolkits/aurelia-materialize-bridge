import * as au from "../aurelia";

@au.customElement("md-colors")
export class MdColors {
	@au.bindable
	primaryColor: string;

	@au.bindable
	accentColor: string;

	@au.bindable
	errorColor: string = "#F44336";

	@au.bindable
	successColor: string = "#26A69A";
}
