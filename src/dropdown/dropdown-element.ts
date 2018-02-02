import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-dropdown")
@autoinject
export class MdDropdownElement {
	constructor(private element: Element) {
		this.controlId = `md-dropdown-${MdDropdownElement.id++}`;
	}

	static id = 0;
	controlId: string;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	alignment: string = "left";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	belowOrigin: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	constrainWidth: boolean | string = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	gutter: number = 0;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	hover: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdTitle: string;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	inDuration: number | string = 300;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	outDuration: number | string = 225;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	stopPropagation: boolean | string = false;

	attached() {
		$(this.element).dropdown({
			alignment: this.alignment,
			belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
			constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
			gutter: parseInt(this.gutter.toString(), 10),
			hover: getBooleanFromAttributeValue(this.hover),
			inDuration: parseInt(this.inDuration.toString(), 10),
			outDuration: parseInt(this.outDuration.toString(), 10),
			stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
		});
	}
}
