import * as au from "../aurelia";

@au.customAttribute("md-dropdown")
@au.autoinject
export class MdDropdown {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	static elementId: number = 0;
	id: string;
	attributeManager: au.AttributeManager;
	contentAttributeManager: au.AttributeManager;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	activates = "";

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	ref: Element = null;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	alignment: "left" | "right";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoTrigger: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	constrainWidth: boolean;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	container: Element | string;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	coverTrigger: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	closeOnClick: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	hover: boolean;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number;

	instance: M.Dropdown;

	attached() {
		this.handleActivateElement();
		this.contentAttributeManager = new au.AttributeManager(document.getElementById(this.activates));
		this.attributeManager.addClasses("dropdown-trigger");
		this.contentAttributeManager.addClasses("dropdown-content");
		let container = typeof this.container === "string" ? document.querySelector(this.container) : this.container;
		let options: Partial<M.DropdownOptions> = {
			alignment: this.alignment,
			autoTrigger: this.autoTrigger,
			constrainWidth: this.constrainWidth,
			container,
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
			this.instance.dropdownEl.remove();
		}
		this.attributeManager.removeAttributes("data-target");
		this.attributeManager.removeClasses("dropdown-trigger");
		this.contentAttributeManager.removeClasses("dropdown-content");
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

	handleActivateElement() {
		if (this.ref) {
			let id = this.ref.getAttribute("id");
			if (!id) {
				id = `md-dropdown-${MdDropdown.elementId++}`;
				this.ref.setAttribute("id", id);
				this.activates = id;
			}
			this.id = id;
		}
		this.attributeManager.addAttributes({ "data-target": this.activates });
	}
}
