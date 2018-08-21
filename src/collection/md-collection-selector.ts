import * as au from "../aurelia";

@au.customElement("md-collection-selector")
@au.autoinject
export class MdCollectionSelector {
	constructor(private element: Element) { }

	@au.bindable
	item: any;

	@au.ato.bindable.booleanMd
	mdDisabled: boolean = false;

	@au.ato.bindable.booleanMd
	isSelected: boolean = false;
	isSelectedChanged(newValue) {
		au.fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
	}
}
