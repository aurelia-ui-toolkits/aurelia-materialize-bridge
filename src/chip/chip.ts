import * as au from "../aurelia";

@au.autoinject
export class MdChip {
	constructor(private element: Element) { }

	@au.ato.bindable.booleanMd
	mdClose: boolean = false;

	close() {
		this.element.parentElement.removeChild(this.element);
		au.fireEvent(this.element, "close");
	}
}
