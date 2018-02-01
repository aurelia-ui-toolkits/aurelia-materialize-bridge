import { autoinject, bindable, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";

@autoinject
export class MdCard {
	constructor(private element: Element) {
	}

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdHorizontal: boolean | string;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdImage = null;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdReveal: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdAction: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdStickyAction: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdSize: string = "";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdTitle: string;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdClass: string;

	attached() {
		this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
		this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
		this.mdAction = getBooleanFromAttributeValue(this.mdAction);
		this.mdStickyAction = getBooleanFromAttributeValue(this.mdStickyAction);
	}
}
