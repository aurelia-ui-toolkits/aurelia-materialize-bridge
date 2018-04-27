import * as au from "../aurelia";

@au.customElement("md-card")
@au.autoinject
export class MdCard {
	constructor(private element: Element) { }

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdHorizontal: boolean;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdImage: string = null;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdReveal: boolean;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdAction: boolean;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdStickyAction: boolean;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdSize: string = "";

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdClass: string;
}
