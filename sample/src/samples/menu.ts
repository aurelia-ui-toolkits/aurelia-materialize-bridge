import { bindable } from "aurelia-templating";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { autoinject } from "aurelia-dependency-injection";
import { ComponentService } from "../shared/component-service";
import { getLogger, Logger } from "aurelia-logging";
import { TaskQueue } from "aurelia-framework";

@autoinject
export class Menu {
	constructor(private element: Element, componentService: ComponentService, eventAggregator: EventAggregator, private taskQueue: TaskQueue) {
		this.categories = componentService.getIterableComponents(true);
		this.subscriptions.push(eventAggregator.subscribe("router:navigation:complete", e => this.routeChanged(e)));
		this.log = getLogger("menu");
	}

	log: Logger;
	subscriptions: Subscription[] = [];
	categories: any;

	@bindable
	activeItem;
	activeItemChanged(newValue, oldValue) {
		this.taskQueue.queueTask(() => {
			this.log.debug("activeItemChanged", newValue, oldValue);
			// find parent header and expand it
			let header = $("li.active", this.element).parents(".collapsible-body").siblings(".collapsible-header");
			if (header.length > 0) {
				header.addClass("active");
				header.parents("[md-collapsible]").get(0).au["md-collapsible"].viewModel.refresh();
			} else {
				this.log.warn("activeItemChanged", "header not found");
			}
		});
	}

	setActive(ctrl) {
		this.activeItem = ctrl.link;
		return true;
	}

	routeChanged(e) {
		this.log.debug("routeChanged", e);
		this.log.debug("routeChanged activeItem before", this.activeItem);
		let link = `#${e.instruction.fragment}`;
		// this.activeItem = link.split('/').splice(0, 3).join('/');
		let tokens = link.split("/");
		let lastFragment = tokens.splice(2)[0].split("-")[0];
		tokens.push(lastFragment);
		this.activeItem = tokens.join("/");
		this.log.debug("routeChanged activeItem after", this.activeItem);
	}

	detached() {
		this.subscriptions.forEach(i => i.dispose());
	}
}
