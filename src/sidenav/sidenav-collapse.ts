import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger, Logger } from "aurelia-logging";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireMaterializeEvent } from "../common/events";
import { MdSidenav } from "./sidenav";

@customAttribute("md-sidenav-collapse")
@autoinject
export class MdSidenavCollapse {
	constructor(private element: Element) {
		this.element = element;
		this.log = getLogger("md-sidenav-collapse");
	}

	log: Logger;

	@bindable
	ref: MdSidenav;

	async attached() {
		await this.ref.whenAttached;

		const closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick);
		this.onHide = this.onHide.bind(this);
		this.onShow = this.onShow.bind(this);

		this.element.setAttribute("data-activates", this.ref.controlId);
		let sideNavConfig = {
			edge: this.ref.mdEdge || "left",
			closeOnClick,
			menuWidth: parseInt(this.ref.mdWidth.toString(), 10),
			onClose: this.onHide,
			onOpen: this.onShow
		};
		$(this.element).sideNav(sideNavConfig);
	}

	detached() {
		// destroy handler not available
	}

	show() {
		$(this.element).sideNav("show");
	}

	hide() {
		$(this.element).sideNav("hide");
	}

	onShow(el) {
		fireMaterializeEvent(this.ref.element, "sidenav-show");
	}

	onHide(el) {
		fireMaterializeEvent(this.ref.element, "sidenav-hide");
	}
}
