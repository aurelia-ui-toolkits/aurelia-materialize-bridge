import { autoinject, bindable, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";

@autoinject
export class MdChip {
	constructor(private element: Element) { }

	@bindable
	mdClose: boolean | string = false;

	attached() {
		this.mdClose = getBooleanFromAttributeValue(this.mdClose);
	}

	close() {
		this.element.parentElement.removeChild(this.element);
		fireEvent(this.element, "close");
	}
}
