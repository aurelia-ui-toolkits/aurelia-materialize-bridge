import * as LogManager from "aurelia-logging";
import * as components from "./components.json";
import { IComponents } from "./i-components";
import { ICategory } from "./i-category";
import { ISample } from "./i-sample";
import { RouterConfiguration, RouteConfig } from "aurelia-router";

interface IControl {
	title: string;
	status: string;
	link: string;
}

interface IDisplayCategory {
	title: string;
	controls: IControl[];
}

export class ComponentService {
	constructor() {
		this.components = components;
		this.log = LogManager.getLogger("ComponentService");
	}

	components: IComponents;
	log: LogManager.Logger;

	transformToMap(obj) {
		let map = new Map();
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let value = obj[key];
				if (typeof value === "object") {
					map.set(key, this.transformToMap(value));
				} else {
					map.set(key, value);
				}
			}
		}
		return map;
	}

	getIterableComponents(hideEmptyCategories = false): IDisplayCategory[] {
		let categories: IDisplayCategory[] = [];
		Object.keys(this.components).forEach(categoryTitle => {
			if (categoryTitle !== "default") {
				let category: IDisplayCategory = { title: categoryTitle, controls: [] };
				let jsonCategory = this.components[categoryTitle];
				Object.keys(jsonCategory).forEach(moduleTitle => {
					let mdl = jsonCategory[moduleTitle];
					let control: IControl = { title: moduleTitle, status: mdl.status, link: "" };
					if (mdl.status && mdl.nav !== false) {
						control.link = `#/samples/${mdl.moduleId || moduleTitle.toLowerCase()}`;
					}
					category.controls.push(control);
				});
				if (!hideEmptyCategories || category.controls.some(c => !!c.link)) {
					categories.push(category);
				}
			}
		});
		return categories;
	}

	getRouterConfig(): RouteConfig[] {
		let routes: RouteConfig[] = [];
		Object.keys(this.components).forEach(categoryTitle => {
			let category = this.components[categoryTitle];
			Object.keys(category).forEach(moduleTitle => {
				let mdl = category[moduleTitle];
				if (mdl.status && mdl.nav !== false) {
					let shortModuleId = mdl.moduleId || moduleTitle.toLowerCase();
					let moduleId = `samples/${shortModuleId}/index`;

					if (mdl.samples) {
						let keys = Object.keys(mdl.samples);
						keys.forEach(sampleName => {
							let sample = mdl.samples[sampleName];
							sample = this.normalizeSample(sampleName, sample);
							let route: RouteConfig = {
								name: `${shortModuleId}-${sampleName}`,
								route: `${shortModuleId}-${sampleName}`,
								moduleId: "./sample-runner",
								title: sample.title,
								sample,
								categoryTitle,
								baseModuleId: `${shortModuleId}`,
								baseModuleTitle: moduleTitle,
								nav: true
							};
							this.log.debug("added route", route);
							routes.push(route);

							if (sample.default) {
								route = {
									name: shortModuleId,
									route: shortModuleId,
									redirect: route.route as string
								};
								this.log.debug("added default route", route);
								routes.push(route);
							}
						});
					}
					else {
						this.log.warn("DEPRECATED: component route has no gist:", moduleTitle, mdl);
						routes.push({ name: shortModuleId, route: shortModuleId, moduleId, moduleTitle });
					}
				}
			});
		});
		return routes;
	}

	normalizeSample(name: string, sample: ISample | string): ISample {
		if (typeof sample !== "object") {
			sample = {
				gist: sample
			};
		}
		if (!sample.title) {
			sample.title = name.replace(/-/g, " ");
			sample.title = sample.title.charAt(0).toUpperCase() + sample.title.slice(1);
		}
		return sample;
	}
}
