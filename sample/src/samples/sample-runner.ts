import { autoinject } from "aurelia-dependency-injection";
import { HttpClient } from "aurelia-http-client";
import { activationStrategy, Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { TaskQueue } from "aurelia-task-queue";
import { bindable, TemplatingEngine, ViewResources } from "aurelia-templating";
import * as LogManager from "aurelia-logging";
import { Settings } from "../settings";
import { ISample } from "../shared/i-sample";
import { Loader } from "aurelia-framework";

@autoinject
export class SampleRunner {
	constructor(private settings: Settings, private templatingEngine: TemplatingEngine, private viewResources: ViewResources, private taskQueue: TaskQueue,
		private http: HttpClient, private loader: Loader) {
		this.log = LogManager.getLogger("sample-runner");
	}

	log: LogManager.Logger;

	@bindable
	router: Router;

	fakeRouter = { navigation: [] };
	loading: boolean = true;
	tabs = [];
	routes: RouteConfig[];
	sample: ISample;
	category: string;
	title: string;

	activate(params: any, route: RouteConfig) {
		let sample = route.navModel.config.sample;
		let category = route.navModel.config.category;
		let baseModuleId = route.baseModuleId;
		this.router = route.navModel.router;
		this.routes = this.router.routes.filter(r => r.category === category && r.baseModuleId === baseModuleId);
		this.fakeRouter.navigation = this.routes.map(r => r.navModel);

		this.log.debug("activate sample", sample);
		this.log.debug("activate router", this.router);
		this.log.debug("activate route", route);
		this.log.debug("activate routes", this.routes);

		let cacheBust = Math.floor((Math.random() * 100000) + 1);
		sample.path = `${this.settings.gistProxy}file-cache-bust/${cacheBust}/${sample.gist}/app`;
		this.sample = sample;
		this.category = category;
		this.title = route.baseModuleTitle;
	}

	async attached() {
		this.loading = true;
		let response = await this.http.get(`${this.settings.gistProxy}files/${this.sample.gist}`);
		let files = response.content;
		// import(this.sample.path);
		// __non_webpack_require__(this.sample.path);
		this.sample.files = files;
		this.updateTabs(files);
		this.loading = false;
	}

	detached() {
		this.sample = undefined;
	}

	determineActivationStrategy() {
		return activationStrategy.replace;
	}

	updateTabs(files: string[]) {
		let keys = Object.keys(files);

		for (let fileName of keys) {
			let language: string;

			// look up extension, and what language to pass to PrismJS
			// for syntax highlighting
			let split = fileName.split(".");
			let ext = split[split.length - 1];
			switch (ext) {
				default:
				case "html":
					language = "html";
					break;
				case "js":
					language = "javascript";
					break;
				case "css":
					language = "css";
					break;
				case "md":
					language = "markdown";
					break;
			}

			this.tabs.push({ title: fileName, language, filename: fileName });
		}
	}

	getSampleFile(filename: string) {
		return (this.sample.files[filename] as any).content;
	}
}
