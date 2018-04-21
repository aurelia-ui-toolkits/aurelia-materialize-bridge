import { customElement, autoinject, bindingMode } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { bindable } from "aurelia-typed-observable-plugin";

@customElement("md-navbar")
@autoinject
export class MdNavbar {
	constructor(private element: Element) { }

	fixedAnchor: HTMLDivElement;
	nav: HTMLElement;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdExtended: boolean;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdFixed: boolean;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdAutoHeight: boolean;

	fixedAttributeManager: AttributeManager;
	navAttributeManager: AttributeManager;

	attached() {
		this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
		this.navAttributeManager = new AttributeManager(this.nav);
		if (this.mdFixed) {
			this.fixedAttributeManager.addClasses("navbar-fixed");
		}
		if (this.mdAutoHeight) {
			this.navAttributeManager.addClasses("md-auto-height");
		}
		if (this.mdExtended) {
			this.navAttributeManager.addClasses("nav-extended");
		}
	}

	detached() {
		if (this.mdFixed) {
			this.fixedAttributeManager.removeClasses("navbar-fixed");
		}
		if (this.mdAutoHeight) {
			this.navAttributeManager.removeClasses("md-auto-height");
		}
		if (this.mdExtended) {
			this.navAttributeManager.removeClasses("nav-extended");
		}
	}
}
