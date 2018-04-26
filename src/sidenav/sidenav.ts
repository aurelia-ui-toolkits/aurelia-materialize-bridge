import * as au from "../aurelia";

@au.customElement("md-sidenav")
@au.autoinject
export class MdSidenav {
	constructor(public element: Element) {
		this.controlId = `md-sidenav-${MdSidenav.id++}`;
	}

	static fixedClass: string = "sidenav-fixed";

	static id = 0;
	controlId: string;
	sidenav: HTMLDivElement;
	instance: M.Sidenav;
	attributeManager: au.AttributeManager;

	@au.bindable
	options: M.SidenavOptions;

	@au.bindable
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

	attached() {
		this.attributeManager = new au.AttributeManager(this.sidenav);
		if (this.mdFixed) {
			this.attributeManager.addClasses(MdSidenav.fixedClass);
		}
		this.instance = new M.Sidenav(this.sidenav, this.options);
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
