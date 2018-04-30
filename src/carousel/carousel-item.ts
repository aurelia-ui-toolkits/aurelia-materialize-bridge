import * as au from "../aurelia";

@au.customElement("md-carousel-item")
@au.autoinject
export class MdCarouselItem {
	constructor(private element: Element) { }

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdHref: string = "";

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdImage: string = "";
}
