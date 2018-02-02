import { autoinject, bindable, bindingMode, observable, customElement } from "aurelia-framework";
import { fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-collection-selector")
@autoinject
export class MdCollectionSelector {
	constructor(private element: Element) { }

	@bindable
	item: any;

	@bindable
	mdDisabled: boolean | string = false;
	mdDisabledChanged(newValue: boolean | string) {
		this.mdDisabled = getBooleanFromAttributeValue(newValue);
	}

	@observable
	isSelected: boolean | string = false;

	isSelectedChanged(newValue) {
		fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
	}
}
