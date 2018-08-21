import * as au from "../aurelia";

@au.customElement("md-navbar")
@au.autoinject
export class MdNavbar {
	constructor(private element: Element) { }

	fixedAnchor: HTMLDivElement;
	nav: HTMLElement;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	extended: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	fixed: boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	autoHeight: boolean;

	fixedAttributeManager: au.AttributeManager;
	navAttributeManager: au.AttributeManager;

	attached() {
		this.fixedAttributeManager = new au.AttributeManager(this.fixedAnchor);
		this.navAttributeManager = new au.AttributeManager(this.nav);
		if (this.fixed) {
			this.fixedAttributeManager.addClasses("navbar-fixed");
		}
		if (this.autoHeight) {
			this.navAttributeManager.addClasses("auto-height");
		}
		if (this.extended) {
			this.navAttributeManager.addClasses("nav-extended");
		}
	}

	detached() {
		if (this.fixed) {
			this.fixedAttributeManager.removeClasses("navbar-fixed");
		}
		if (this.autoHeight) {
			this.navAttributeManager.removeClasses("auto-height");
		}
		if (this.extended) {
			this.navAttributeManager.removeClasses("nav-extended");
		}
	}
}
