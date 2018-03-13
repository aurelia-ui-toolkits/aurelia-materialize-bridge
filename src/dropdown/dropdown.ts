import { bindable, customAttribute, bindingMode, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-dropdown")
@autoinject
export class MdDropdown {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	static elementId: number = 0;
	id: string;
	attributeManager: AttributeManager;
	contentAttributeManager: AttributeManager;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	activates = "";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	ref: Element = null;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	alignment: string = "left";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	belowOrigin: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	constrainWidth: boolean | string = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	gutter: number | string = 0;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	hover = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdTitle: string;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	inDuration: number | string = 300;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	outDuration: number | string = 225;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	stopPropagation = false;

	attached() {
		this.handleActivateElement();
		this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

		this.attributeManager.addClasses("dropdown-button");
		this.contentAttributeManager.addClasses("dropdown-content");
		// this.attributeManager.addAttributes({ 'data-activates': this.activates });

		$(this.element).dropdown({
			alignment: this.alignment,
			belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
			constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
			constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
			gutter: parseInt(this.gutter.toString(), 10),
			hover: getBooleanFromAttributeValue(this.hover),
			inDuration: parseInt(this.inDuration.toString(), 10),
			outDuration: parseInt(this.outDuration.toString(), 10),
			stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
		});
	}

	detached() {
		this.attributeManager.removeAttributes("data-activates");
		this.attributeManager.removeClasses("dropdown-button");
		this.contentAttributeManager.removeClasses("dropdown-content");
	}

	open() {
		$(this.element).dropdown("open");
	}

	close() {
		$(this.element).dropdown("close");
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
		this.attributeManager.addAttributes({ "data-activates": this.activates });
	}
}
