import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig, NavigationInstruction, PipelineResult } from "aurelia-router";
import { Subscription, EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";

declare var __webpack_require__: { m: any };

// @useView("./sample-template.html")
@autoinject
export class Index {
	constructor(private eventAggregator: EventAggregator, private loader: Loader, private taskQueue: TaskQueue) {
		this.subscription = this.eventAggregator.subscribe("router:navigation:complete", e => this.taskQueue.queueTask(() => this.navigationComplete(e)));
	}
	subscription: Subscription;

	router: Router;
	tabs: any[] = [];
	mdTabs: MdTabs;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			{ route: "", redirect: "basic-use" },
			{ name: "basic-use", route: "basic-use", moduleId: "./basic-use/app", nav: true, title: "Basic use" },
			{ name: "in-dropdown", route: "in-dropdown", moduleId: "./in-dropdown/app", nav: true, title: "In dropdown" },
		];
		config.map(routes);
		this.router = router;
	}

	async navigationComplete(e: PipelineResult) {
		// let tabs = [];
		let modules: string[] = Object.keys(__webpack_require__.m).filter(x => x.startsWith(e.instruction.fragment.substring(1)) && x.endsWith(".raw"));
		for (let m of modules) {
			let pathParts = m.split("/");
			let fileName = pathParts[pathParts.length - 1].replace(".raw", "");
			let fileNameParts = fileName.split(".");
			let language: string;
			switch (fileNameParts[1]) {
				default:
				case "html":
					language = "html";
					break;
				case "js":
					language = "javascript";
					break;
				case "ts":
					language = "typescript";
					break;
				case "css":
					language = "css";
					break;
				case "md":
					language = "markdown";
					break;
			}
			this.tabs.push({ title: fileName, language, filename: fileName, content: await this.loader.loadText(m) });
		}
		// this.tabs = tabs;
		// this.mdTabs.refresh();
		// this.taskQueue.queueTask(() => { this.mdTabs.refresh(); });
		// this.taskQueue.queueTask(() => { this.mdTabs.selectTab(0); });
	}

	detached() {
		if (this.subscription) {
			this.subscription.dispose();
		}
	}
}
