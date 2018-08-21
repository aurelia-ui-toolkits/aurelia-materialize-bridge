import * as au from "../aurelia";

@au.customAttribute("md-badge")
@au.autoinject
export class MdBadge {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	@au.ato.bindable
	isNew: boolean = false;
	isNewChanged() {
		if (this.isNew) {
			this.attributeManager.addClasses("new");
		}
		else {
			this.attributeManager.removeClasses("new");
		}
	}

	@au.ato.bindable
	caption: string = null;
	captionChanged() {
		if (this.caption !== null) {
			this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
		}
		else {
			this.attributeManager.removeAttributes(["data-badge-caption"]);
		}
	}

	attributeManager: au.AttributeManager;

	attached() {
		this.element.classList.add("badge");
	}

	detached() {
		this.attributeManager.removeClasses(["badge", "new"]);
		this.attributeManager.removeAttributes(["data-badge-caption"]);
	}
}
