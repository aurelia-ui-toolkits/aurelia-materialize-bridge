import { customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { fireMaterializeEvent } from "../common/events";
import { AttributeManager } from "../common/attributeManager";
import { bindable } from "aurelia-typed-observable-plugin";

@customAttribute("md-tabs")
@autoinject
export class MdTabs {
	constructor(private element: Element, private taskQueue: TaskQueue) {
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;
	tabAttributeManagers: AttributeManager[] = [];

	@bindable
	fixed: boolean = false;
	fixedChanged(newValue) {
		if (newValue) {
			this.attributeManager.addClasses("tabs-fixed-width");
		} else {
			this.attributeManager.removeClasses("tabs-fixed-width");
		}
	}

	@bindable
	onShow: (this: M.Tabs, newContent: Element) => void = null;

	@bindable
	responsiveThreshold: number = Infinity;

	@bindable
	swipeable: boolean = false;

	@bindable
	transparent: boolean = false;
	transparentChanged(newValue) {
		if (newValue) {
			this.attributeManager.addClasses("tabs-transparent");
		} else {
			this.attributeManager.removeClasses("tabs-transparent");
		}
	}

	instance: M.Tabs;

	attached() {
		this.attributeManager.addClasses("tabs");

		let children = this.element.querySelectorAll("li");
		for (let child of Array.from(children)) {
			let setter = new AttributeManager(child);
			setter.addClasses(["tab", "primary-text"]);
			this.tabAttributeManagers.push(setter);
		}

		this.instance = new M.Tabs(this.element, {
			onShow: this.onShow,
			swipeable: this.swipeable,
			responsiveThreshold: this.responsiveThreshold
		});

		let childAnchors = this.element.querySelectorAll("li a");
		for (let a of Array.from(childAnchors)) {
			a.addEventListener("click", this.fireTabSelectedEvent);
		}
	}

	detached() {
		this.instance.destroy();
		this.attributeManager.removeClasses("tabs");
		this.tabAttributeManagers.forEach(setter => {
			setter.removeClasses("tab");
		});
		this.tabAttributeManagers = [];
		let childAnchors = this.element.querySelectorAll("li a");
		for (let a of Array.from(childAnchors)) {
			a.removeEventListener("click", this.fireTabSelectedEvent);
		}
	}

	refresh() {
		this.taskQueue.queueTask(() => {
			this.detached();
			this.attached();
		});
	}

	updateTabIndicator() {
		this.instance.updateTabIndicator();
	}

	fireTabSelectedEvent = (e: Event) => {
		let href = (e.target as HTMLAnchorElement).getAttribute("href");
		fireMaterializeEvent(this.element, "selected", href);
	}

	select(id: string) {
		this.instance.select(id);
		fireMaterializeEvent(this.element, "selected", `#${id}`);
	}

	// FIXME: probably bad - binding this introduces dirty checking
	get selectedTab(): number {
		return this.instance.index;
	}
}
