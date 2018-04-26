import * as au from "../aurelia";

@au.customElement("md-dropdown")
@au.autoinject
export class MdDropdownElement {
	constructor(private element: Element) {
		this.controlId = `md-dropdown-${MdDropdownElement.id++}`;
	}

	static id = 0;
	controlId: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	alignment: string = "left";

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	autoTrigger: boolean = false;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	constrainWidth: boolean = true;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	container: Element = null;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	coverTrigger: boolean = false;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	closeOnClick: boolean = true;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	hover: boolean = false;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number = 300;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number = 225;

	instance: M.Dropdown;

	attached() {
		this.instance = new M.Dropdown(this.element, {
			alignment: this.alignment,
			autoTrigger: this.autoTrigger,
			constrainWidth: this.constrainWidth,
			container: this.container,
			coverTrigger: this.coverTrigger,
			closeOnClick: this.closeOnClick,
			hover: this.hover,
			inDuration: this.inDuration,
			outDuration: this.outDuration,
			onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
			onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
			onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
			onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
		});
	}

	detached() {
		if (this.instance) {
			this.instance.destroy();
		}
	}

	open() {
		if (this.instance) {
			this.instance.open();
		}
	}

	close() {
		if (this.instance) {
			this.instance.close();
		}
	}

	recalculateDimensions() {
		if (this.instance) {
			this.instance.recalculateDimensions();
		}
	}
}
