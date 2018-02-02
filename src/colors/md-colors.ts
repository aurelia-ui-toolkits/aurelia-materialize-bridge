import { bindable, customElement } from "aurelia-framework";

@customElement("md-colors")
export class MdColors {
	@bindable
	mdPrimaryColor: string;

	@bindable
	mdAccentColor: string;

	@bindable
	mdErrorColor: string = '#F44336';

	@bindable
	mdSuccessColor: string = '#26a69a';
}
