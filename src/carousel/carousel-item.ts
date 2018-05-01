import * as au from "../aurelia";

@au.customElement("md-carousel-item")
@au.autoinject
export class MdCarouselItem {
	constructor(private element: Element) { }

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdHref: string = "";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdImage: string = "";
}
