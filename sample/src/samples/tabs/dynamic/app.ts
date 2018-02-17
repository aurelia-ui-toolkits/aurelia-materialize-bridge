import { autoinject, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";

@autoinject
export class App {
	constructor(private tq: TaskQueue) { }

	tabs = [
		{ id: 0, title: "tab 1", content: "content for tab 1" },
		{ id: 1, title: "tab 2", content: "content for tab 2" },
		{ id: 2, title: "tab 3", content: "content for tab 3" },
		{ id: 3, title: "tab 4", content: "content for tab 4" }
	];
	tabsVM: MdTabs;
	tabControl: HTMLUListElement;
	tabContents: HTMLDivElement;

	addTab() {
		const id = this.tabs.length;
		this.tabs.push({
			id, title: `tab ${id + 1}`, content: `content for tab ${id + 1}`
		});
		this.tabsVM.refresh();
	}

	refresh() {
		$("li", this.tabControl).each(function(i, tab) {
			$(tab).addClass("tab");
		});
		$(".tab-content", this.tabContents).each((i, tab) => {
			if (this.tabsVM.selectedTab.index !== i) {
				$(tab).hide();
			}
		});
		this.tq.queueTask(() => {
			// window resize adjusts Materialize tab indicator
			$(window).trigger("resize");
		});
	}
}
