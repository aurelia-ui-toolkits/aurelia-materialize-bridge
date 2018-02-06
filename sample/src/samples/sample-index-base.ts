import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig, NavigationInstruction, PipelineResult } from "aurelia-router";
import { Subscription, EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";
import { RouterView } from "aurelia-templating-router";

declare var __webpack_require__: { m: any };

@useView("../sample-template.html")
@autoinject
export class SampleIndexBase {
	constructor(private eventAggregator: EventAggregator, private loader: Loader, private taskQueue: TaskQueue) {
		// this.subscription = this.eventAggregator.subscribe("router:navigation:complete", e => this.navigationComplete(e));
	}
	subscription: Subscription;

	tabs: any[] = [];
	mdTabs: MdTabs;
	childRouterView: any;

	activate(a, b) {
		this.taskQueue.queueTask(() => { console.log("Activated", this.childRouterView); this.navigationComplete({ instruction: b.navModel.router.currentInstruction.parentInstruction }); });
	}

	async navigationComplete(e: any) {
		console.log(e);
		if (this.subscription) {
			this.subscription.dispose();
		}
		this.tabs = [];
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
		this.taskQueue.queueTask(() => {
			this.mdTabs.detached();
			this.mdTabs.attached();
		});
		// this.tabs = tabs;
		// this.mdTabs.refresh();
		// this.taskQueue.queueTask(() => { this.mdTabs.refresh(); });
		// this.taskQueue.queueTask(() => { this.mdTabs.selectTab(0); });
	}

	deactivate() {
		// if (this.subscription) {
		// 	this.subscription.dispose();
		// }
	}
}
