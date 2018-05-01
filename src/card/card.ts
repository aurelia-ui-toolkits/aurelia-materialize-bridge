import * as au from "../aurelia";

@au.customElement("md-card")
@au.autoinject
export class MdCard {
	constructor(private element: Element) { }

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdHorizontal: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdImage: string = null;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdReveal: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdAction: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdStickyAction: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdSize: string = "";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdClass: string;
}
