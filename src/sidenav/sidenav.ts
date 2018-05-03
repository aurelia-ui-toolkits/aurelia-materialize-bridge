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

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	edge: "left" | "right";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	draggable: boolean;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number;

	@au.ato.bindable.booleanMd
	fixed: boolean = false;
	fixedChanged(newValue) {
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
		if (this.fixed) {
			this.attributeManager.addClasses(MdSidenav.fixedClass);
		}
		let options: Partial<M.SidenavOptions> = {
			draggable: this.draggable,
			edge: this.edge,
			inDuration: this.inDuration,
			outDuration: this.outDuration,
			onOpenStart: elem => au.fireMaterializeEvent(this.element, "open-start", { elem }),
			onOpenEnd: elem => au.fireMaterializeEvent(this.element, "open-end", { elem }),
			onCloseStart: elem => au.fireMaterializeEvent(this.element, "close-start", { elem }),
			onCloseEnd: elem => au.fireMaterializeEvent(this.element, "close-end", { elem })
		};
		au.cleanOptions(options);
		this.instance = new M.Sidenav(this.sidenav, options);
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
