import { bindable, customAttribute, bindingMode, autoinject } from "aurelia-framework";

@customAttribute("md-scrollfire-target")
@autoinject
export class MdScrollfireTarget {
	@bindable
	callback: () => any = null;

	@bindable
	offset: number = 0;
}
