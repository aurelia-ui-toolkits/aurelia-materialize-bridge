import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { getLogger, Logger } from "aurelia-logging";

@customElement("md-slider")
@autoinject
export class MdSlider {
	constructor(private element: Element) {
		this.log = getLogger("md-slider");
	}

	log: Logger;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdFillContainer: boolean | string = false;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdHeight: number | string = 400;

	@bindable
	mdIndicators: boolean | string = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdInterval: number | string = 6000;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdTransition: number | string = 500;

	attached() {
		if (getBooleanFromAttributeValue(this.mdFillContainer)) {
			this.element.classList.add("fullscreen");
		}
		this.refresh();
	}

	pause() {
		$(this.element).slider("pause");
	}

	start() {
		$(this.element).slider("start");
	}

	next() {
		$(this.element).slider("next");
	}

	prev() {
		$(this.element).slider("prev");
	}

	refresh() {
		let options = {
			height: parseInt(this.mdHeight.toString(), 10),
			indicators: getBooleanFromAttributeValue(this.mdIndicators),
			interval: parseInt(this.mdInterval.toString(), 10),
			transition: parseInt(this.mdTransition.toString(), 10)
		};
		this.log.debug("refreshing slider, params:", options);
		$(this.element).slider(options);
	}

	mdIndicatorsChanged() {
		this.refresh();
	}

	// commented since that leads to strange effects
	// mdIntervalChanged() {
	//   this.refresh();
	// }
	//
	// mdTransitionChanged() {
	//   this.refresh();
	// }
}
