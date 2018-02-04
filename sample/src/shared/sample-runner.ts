import { autoinject } from "aurelia-dependency-injection";
import { activationStrategy } from "aurelia-router";
import { EventAggregator } from "aurelia-event-aggregator";
import { TaskQueue } from "aurelia-framework";
import { ISample } from "./i-sample";

@autoinject
export class SampleRunner {

	constructor(private ea: EventAggregator, private taskQueue: TaskQueue) { }

	sample: ISample;

	activate(params, route) {
		let sample = route.navModel.config.sample;

		if (!sample) {
			throw new Error("Route does not contain a 'sample' property");
		}

		this.sample = sample;
	}

	restart() {
		let old = this.sample;
		this.sample = undefined;
		this.taskQueue.queueTask(() => {
			this.sample = old;
		});
	}

	determineActivationStrategy() {
		return activationStrategy.replace;
	}
}
