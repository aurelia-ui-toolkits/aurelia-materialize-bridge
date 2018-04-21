import { customElement, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getLogger, Logger } from "aurelia-logging";
import { bindable } from "aurelia-typed-observable-plugin";

@customElement("md-sidenav")
@autoinject
export class MdSidenav {
	constructor(public element: Element) {
		this.controlId = `md-sidenav-${MdSidenav.id++}`;
		this.log = getLogger("md-sidenav");
	}

	static fixedClass: string = "sidenav-fixed";

	static id = 0;
	controlId: string;
	log: Logger;
	sidenav: HTMLDivElement;
	instance: M.Sidenav;
	attributeManager: AttributeManager;

	@bindable
	options: M.SidenavOptions;

	@bindable
	mdFixed: boolean = false;
	mdFixedChanged(newValue) {
		if (!this.attributeManager) {
			return;
		}
		if (newValue) {
			this.attributeManager.addClasses(MdSidenav.fixedClass);
		} else {
			this.attributeManager.removeClasses(MdSidenav.fixedClass);
		}
	}

	attachedResolver: () => void;
	whenAttached: Promise<void> = new Promise((resolve, reject) => this.attachedResolver = resolve);

	attached() {
		this.attributeManager = new AttributeManager(this.sidenav);
		if (this.mdFixed) {
			this.attributeManager.addClasses(MdSidenav.fixedClass);
		}
		this.instance = new M.Sidenav(this.sidenav, this.options);
		this.attachedResolver();
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

	detached() {
		this.attributeManager.removeClasses([MdSidenav.fixedClass]);
		if (this.instance) {
			this.instance.destroy();
		}
	}

}
