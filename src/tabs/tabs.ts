import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { fireMaterializeEvent } from "../common/events";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customAttribute("md-tabs")
@autoinject
export class MdTabs {
	constructor(private element: Element, private taskQueue: TaskQueue) {
		this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
		this.attributeManager = new AttributeManager(this.element);
	}

	attributeManager: AttributeManager;
	tabAttributeManagers: AttributeManager[] = [];

	@bindable
	fixed: boolean | string = false;

	@bindable
	onShow: (event: any) => void = null;

	@bindable
	responsiveThreshold: number | string = Infinity;

	@bindable
	swipeable: boolean | string = false;

	@bindable
	transparent: boolean | string = false;

	attached() {
		this.attributeManager.addClasses("tabs");

		let children = this.element.querySelectorAll("li");
		[].forEach.call(children, child => {
			let setter = new AttributeManager(child);
			setter.addClasses(["tab", "primary-text"]);
			this.tabAttributeManagers.push(setter);
		});

		const self = this;
		$(this.element).tabs({
			onShow(jQueryElement: JQuery) {
				if (self.onShow) {
					self.onShow({ element: jQueryElement });
				}
			},
			swipeable: getBooleanFromAttributeValue(this.swipeable),
			responsiveThreshold: this.responsiveThreshold
		});
		let childAnchors = this.element.querySelectorAll("li a");
		[].forEach.call(childAnchors, a => {
			a.addEventListener("click", this.fireTabSelectedEvent);
		});
	}

	detached() {
		this.attributeManager.removeClasses("tabs");

		// no destroy handler in tabs

		this.tabAttributeManagers.forEach(setter => {
			setter.removeClasses("tab");
		});
		this.tabAttributeManagers = [];
		let childAnchors = this.element.querySelectorAll("li a");
		[].forEach.call(childAnchors, a => {
			a.removeEventListener("click", this.fireTabSelectedEvent);
		});
	}

	refresh() {
		this.taskQueue.queueTask(() => {
			let hrefs = [];
			$("li a", this.element).each((i, tab) => {
				$(tab).parent().addClass("tab");
				hrefs.push($(tab).attr("href"));
				tab.removeEventListener("click", this.fireTabSelectedEvent);
				tab.addEventListener("click", this.fireTabSelectedEvent);
			});
			$(hrefs).each((i, tab) => {
				if (this.selectedTab.index !== i) {
					$(tab).hide();
				}
			});
			this.taskQueue.queueTask(() => {
				// window resize adjusts Materialize tab indicator
				$(window).trigger("resize");
			});
		});
	}

	fixedChanged(newValue) {
		if (newValue) {
			this.attributeManager.addClasses("tabs-fixed-width");
		} else {
			this.attributeManager.removeClasses("tabs-fixed-width");
		}
	}

	transparentChanged(newValue) {
		if (newValue) {
			this.attributeManager.addClasses("tabs-transparent");
		} else {
			this.attributeManager.removeClasses("tabs-transparent");
		}
	}

	fireTabSelectedEvent(e) {
		let href = e.target.getAttribute("href");
		fireMaterializeEvent(this.element, "selected", href);
	}

	selectTab(id: string) {
		$(this.element).tabs("select_tab", id);
		this.fireTabSelectedEvent({
			target: { getAttribute: () => `#${id}` }
		});
	}

	// FIXME: probably bad - binding this introduces dirty checking
	get selectedTab() {
		let children = this.element.querySelectorAll("li.tab a");
		let index = -1;
		let href = null;
		[].forEach.call(children, (a, i) => {
			if (a.classList.contains("active")) {
				index = i;
				href = a.href;
				return;
			}
		});
		return { href, index };
	}
}
