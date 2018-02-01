import { autoinject, bindable, bindingMode } from "aurelia-framework";

@autoinject
export class MdCarouselItem {
	constructor(private element: Element) {}

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdHref: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdImage: string = "";

	attached() { }
}
