import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger, Logger } from "aurelia-logging";

@customAttribute("md-scrollfire")
@autoinject
export class MdScrollfire {
	constructor(private element: Element) {
		this.log = getLogger("md-scrollfire");
	}

	log: Logger;
	targetId = 0;

	attached() {
		let targets = $("[md-scrollfire-target]", this.element);
		if (targets.length > 0) {
			this.log.debug("targets", targets);
			let self = this;
			let options = [];
			targets.each((i, el) => {
				let target = $(el);
				if (!target.attr("id")) {
					target.attr("id", `md-scrollfire-target-${self.targetId++}`);
				}
				options.push({
					selector: "#" + target.attr("id"),
					callback: target.get(0).au["md-scrollfire-target"].viewModel.callback,
					offset: parseInt(target.get(0).au["md-scrollfire-target"].viewModel.offset, 10)
				});
			});
			if (options.length > 0) {
				this.log.debug("configuring scrollFire with these options:", options);
				Materialize.scrollFire(options);
			}
		}
	}
}
