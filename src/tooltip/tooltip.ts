import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-tooltip")
@autoinject
export class MdTooltip {
	constructor(private element: Element) {
		this.attributeManager = new AttributeManager(this.element);
	}

	@bindable
	position: string = "bottom";

	@bindable
	delay: number | string = 50;

	@bindable
	html: boolean | string = false;

	@bindable
	text: string = "";

	attributeManager: AttributeManager;

	bind() {
		this.html = getBooleanFromAttributeValue(this.html);
	}

	attached() {
		this.attributeManager.addClasses("tooltipped");
		this.attributeManager.addAttributes({ "data-position": this.position, "data-tooltip": this.text });
		this.initTooltip();
	}

	detached() {
		$(this.element).tooltip("remove");
		this.attributeManager.removeClasses("tooltipped");
		this.attributeManager.removeAttributes(["data-position", "data-tooltip"]);
	}

	textChanged() {
		this.attributeManager.addAttributes({ "data-tooltip": this.text });
		this.initTooltip();
	}

	initTooltip() {
		$(this.element).tooltip("remove");
		$(this.element).tooltip({
			delay: parseInt(this.delay.toString(), 10),
			html: this.html
		});
	}
}
