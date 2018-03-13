import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";

@customElement("md-carousel-item")
@autoinject
export class MdCarouselItem {
	constructor(private element: Element) {}

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdHref: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdImage: string = "";
}
