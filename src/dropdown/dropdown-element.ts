import * as au from "../aurelia";

@au.customElement("md-dropdown")
@au.autoinject
export class MdDropdownElement {
	constructor(private element: Element) {
		this.controlId = `md-dropdown-${MdDropdownElement.id++}`;
	}

	static id = 0;
	controlId: string;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	alignment: "left" | "right";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoTrigger: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	constrainWidth: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	container: Element = null;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	coverTrigger: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	closeOnClick: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	hover: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	title: string;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number;

	instance: M.Dropdown;

	attached() {
		let options: Partial<M.DropdownOptions> = {
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
		};
		au.cleanOptions(options);
		this.instance = new M.Dropdown(this.element, options);
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
