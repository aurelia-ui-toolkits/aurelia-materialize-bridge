import * as au from "../aurelia";

@au.customElement("md-navbar")
@au.autoinject
export class MdNavbar {
	constructor(private element: Element) { }

	fixedAnchor: HTMLDivElement;
	nav: HTMLElement;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdExtended: boolean;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdFixed: boolean;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdAutoHeight: boolean;

	fixedAttributeManager: au.AttributeManager;
	navAttributeManager: au.AttributeManager;

	attached() {
		this.fixedAttributeManager = new au.AttributeManager(this.fixedAnchor);
		this.navAttributeManager = new au.AttributeManager(this.nav);
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
