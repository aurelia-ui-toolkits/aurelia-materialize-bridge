import * as au from "../aurelia";
import { deprecated } from "aurelia-framework";

@au.customElement("md-card")
@au.autoinject
export class MdCard {
	constructor(private element: Element) { }

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	horizontal: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	image: string = null;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	reveal: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	action: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	stickyAction: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay })
	size: string = "";

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	title: string;
	@deprecated({ error: false, message: "Please use md-title instead." })
	titleChanged() {
		this.mdTitle = this.title;
	}

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdClass: string;
}
