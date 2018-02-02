import { bindable, customElement, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-fab")
@autoinject
export class MdFab {
	@bindable
	mdFixed: boolean | string = false;

	@bindable
	mdLarge: boolean | string = false;

	attached() {
		this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
		this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
	}
}
