import * as au from "../aurelia";

@au.customElement("md-carousel-item")
@au.autoinject
export class MdCarouselItem {
	constructor(private element: Element) { }

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	href: string = "";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	image: string = "";
}
