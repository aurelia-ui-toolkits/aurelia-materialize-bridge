import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";

@customElement("md-navbar")
@autoinject
export class MdNavbar {
	constructor(private element: Element) { }

	fixedAnchor: HTMLDivElement;
	nav: HTMLElement;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdExtended;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdFixed;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdAutoHeight;

	fixedAttributeManager: AttributeManager;
	navAttributeManager: AttributeManager;

	attached() {
		this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
		this.navAttributeManager = new AttributeManager(this.nav);
		if (getBooleanFromAttributeValue(this.mdFixed)) {
			this.fixedAttributeManager.addClasses("navbar-fixed");
		}
		if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
			this.navAttributeManager.addClasses("md-auto-height");
		}
		if (getBooleanFromAttributeValue(this.mdExtended)) {
			this.navAttributeManager.addClasses("nav-extended");
		}
	}

	detached() {
		if (getBooleanFromAttributeValue(this.mdFixed)) {
			this.fixedAttributeManager.removeClasses("navbar-fixed");
		}
		if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
			this.navAttributeManager.removeClasses("md-auto-height");
		}
		if (getBooleanFromAttributeValue(this.mdExtended)) {
			this.navAttributeManager.removeClasses("nav-extended");
		}
	}
}
