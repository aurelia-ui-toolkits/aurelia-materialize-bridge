import { bindable, customElement, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { getLogger, Logger } from "aurelia-logging";

@customElement("md-sidenav")
@autoinject
export class MdSidenav {
	constructor(public element: Element) {
		this.controlId = `md-sidenav-${MdSidenav.id++}`;
		this.log = getLogger("md-sidenav");
		this.whenAttached = new Promise((resolve, reject) => {
			this.attachedResolver = resolve;
		});
	}

	static id = 0;
	controlId: string;
	log: Logger;
	sidenav: HTMLDivElement;
	attributeManager: AttributeManager;

	@bindable
	mdCloseOnClick: boolean | string = false;

	@bindable
	mdEdge: string = "left";

	@bindable
	mdFixed: boolean | string = false;

	@bindable
	mdWidth: number | string = 300;

	attachedResolver: () => void;
	whenAttached: Promise<void> = new Promise((resolve, reject) => this.attachedResolver = resolve);

	attached() {
		this.attributeManager = new AttributeManager(this.sidenav);
		if (getBooleanFromAttributeValue(this.mdFixed)) {
			this.attributeManager.addClasses("fixed");
			if (this.mdEdge === "right") {
				// see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
				this.attributeManager.addClasses("right-aligned");
			}
		}

		this.attachedResolver();
	}

	detached() {
		this.attributeManager.removeClasses(["fixed", "right-aligned"]);
	}

	mdFixedChanged(newValue) {
		if (this.attributeManager) {
			if (getBooleanFromAttributeValue(newValue)) {
				this.attributeManager.addClasses("fixed");
			} else {
				this.attributeManager.removeClasses("fixed");
			}
		}
	}
}
