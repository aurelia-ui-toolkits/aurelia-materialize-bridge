import * as au from "../aurelia";

@au.autoinject
export class MdChip {
	constructor(private element: Element) { }

	@au.ato.bindable.booleanMd
	hasClose: boolean = false;

	closeChip() {
		this.element.parentElement.removeChild(this.element);
		au.fireEvent(this.element, "close");
	}
}
