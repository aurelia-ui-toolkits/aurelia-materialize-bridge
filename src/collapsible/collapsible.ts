import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-collapsible")
@autoinject
export class MdCollapsible {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;

	@bindable
	accordion: boolean | string = false;

	@bindable
	popout: boolean | string = false;

	@bindable
	onOpen: (element: Element) => {};

	@bindable
	onClose: (element: Element) => {};

	attached() {
		this.attributeManager.addClasses("collapsible");
		if (getBooleanFromAttributeValue(this.popout)) {
			this.attributeManager.addClasses("popout");
		}
		this.refresh();
	}

	detached() {
		this.attributeManager.removeClasses(["collapsible", "popout"]);
		this.attributeManager.removeAttributes(["data-collapsible"]);
		$(this.element).collapsible("destroy");
	}

	refresh() {
		const accordion = getBooleanFromAttributeValue(this.accordion);
		const dataCollapsibleAttributeValue = accordion ? "accordion" : "expandable";

		this.attributeManager.addAttributes({ "data-collapsible": dataCollapsibleAttributeValue });

		$(this.element).collapsible({
			accordion,
			onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
			onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
		});
	}

	accordionChanged() {
		this.refresh();
	}

	buildCollapsibleOpenCloseCallbackHandler(handler: (element: Element) => {}) {
		return typeof (handler) === "function" ?
			(targetElementJquery: JQuery) => {
				const targetElement = targetElementJquery[0];

				handler(targetElement);
			} : null;
	}

	open(index = 0) {
		$(this.element).collapsible("open", index);
	}

	close(index = 0) {
		$(this.element).collapsible("close", index);
	}
}
