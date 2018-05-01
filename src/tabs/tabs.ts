import * as au from "../aurelia";

@au.customAttribute("md-tabs")
@au.autoinject
export class MdTabs {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;
	tabAttributeManagers: au.AttributeManager[] = [];

	@au.ato.bindable.booleanMd
	fixed: boolean = false;
	fixedChanged(newValue) {
		if (newValue) {
			this.attributeManager.addClasses("tabs-fixed-width");
		} else {
			this.attributeManager.removeClasses("tabs-fixed-width");
		}
	}

	@au.bindable
	onShow: ({ newContent: Element }) => void = null;

	@au.ato.bindable.numberMd
	responsiveThreshold: number;

	@au.ato.bindable.booleanMd
	swipeable: boolean = false;

	@au.ato.bindable.booleanMd
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
			let setter = new au.AttributeManager(child);
			setter.addClasses(["tab", "primary-text"]);
			this.tabAttributeManagers.push(setter);
		}

		let self = this;
		let options: Partial<M.TabsOptions> = {
			onShow(this: M.Tabs, newContent: Element) {
				if (self.onShow) {
					self.onShow({ newContent });
				}
			},
			swipeable: this.swipeable,
			responsiveThreshold: this.responsiveThreshold
		};
		au.cleanOptions(options);
		this.instance = new M.Tabs(this.element, options);

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
		au.fireMaterializeEvent(this.element, "selected", href);
	}

	select(id: string) {
		this.instance.select(id);
		au.fireMaterializeEvent(this.element, "selected", `#${id}`);
	}

	// FIXME: probably bad - binding this introduces dirty checking
	get selectedTab(): number {
		return this.instance.index;
	}
}
