import * as au from "../aurelia";

@au.customElement("md-colors")
export class MdColors {
	@au.bindable
	mdPrimaryColor: string;

	@au.bindable
	mdAccentColor: string;

	@au.bindable
	mdErrorColor: string = "#F44336";

	@au.bindable
	mdSuccessColor: string = "#26A69A";
}
