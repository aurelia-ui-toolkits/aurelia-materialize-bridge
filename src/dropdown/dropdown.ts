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

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	alignment: string = "left";

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoTrigger: boolean = false;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	constrainWidth: boolean = true;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	container: Element = null;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	coverTrigger: boolean = false;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	closeOnClick: boolean = true;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	hover: boolean = false;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	mdTitle: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number = 300;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number = 225;

	instance: M.Dropdown;

	attached() {
		this.handleActivateElement();
		this.contentAttributeManager = new au.AttributeManager(document.getElementById(this.activates));
		this.attributeManager.addClasses("dropdown-trigger");
		this.contentAttributeManager.addClasses("dropdown-content");

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

// remove when https://github.com/Dogfalo/materialize/pull/5865 gets released
(M.Dropdown as any).prototype._removeEventHandlers = function() {
	this.el.removeEventListener("keydown", this._handleTriggerKeydownBound);
	this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound);

	if (this.options.hover) {
		this.el.removeEventListener("mouseenter", this._handleMouseEnterBound);
		this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound);
		this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound);
	} else {
		this.el.removeEventListener("click", this._handleClickBound);
	}
};
