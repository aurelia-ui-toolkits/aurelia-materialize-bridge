import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig, NavigationInstruction, PipelineResult, activationStrategy } from "aurelia-router";
import { Subscription, EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";
import { RouterView } from "aurelia-templating-router";

declare var __webpack_require__: { m: any };

@useView("../sample-template.html")
@autoinject
export class SampleIndexBase {
	constructor(private eventAggregator: EventAggregator, private loader: Loader, private taskQueue: TaskQueue) {
	}

	subscription: Subscription;

	tabs: any[] = [];
	mdTabs: MdTabs;
	childRouterView: any;

	attached() {
		this.subscription = this.eventAggregator.subscribe("router:navigation:complete", e => this.navigationComplete(e));
	}

	async navigationComplete(e: PipelineResult) {
		let fragment = e.instruction.router.currentInstruction.fragment;
		this.tabs = [];
		let modules: string[] = Object.keys(__webpack_require__.m).filter(x => x.startsWith(fragment.substring(1)) && x.endsWith(".raw"));
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
	}

	detached() {
		if (this.subscription) {
			this.subscription.dispose();
			this.subscription = null;
		}
	}

	getRouteConfig(name: string): RouteConfig {
		let title = name.replace(/-/g, " ");
		return { route: name, name, moduleId: `./${name}/app`, nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase() };
	}
}
