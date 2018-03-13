import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";

@customAttribute("md-box")
@autoinject
export class MdBox {
	constructor(private element: Element) {
		this.element = element;
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	caption;

	attached() {
		this.attributeManager.addClasses("materialboxed");
		if (this.caption) {
			this.attributeManager.addAttributes({ "data-caption": this.caption });
		}
		// FIXME:0 throws "Uncaught TypeError: Cannot read property "css" of undefined", but so does the original
		$(this.element).materialbox();
	}

	detached() {
		this.attributeManager.removeAttributes("data-caption");
		this.attributeManager.removeClasses("materialboxed");
	}
}
