import { autoinject, bindable, bindingMode, children, customElement } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-carousel")
@autoinject
export class MdCarousel {
	constructor(private element: Element, private taskQueue: TaskQueue) { }

	@bindable
	mdIndicators: boolean | string = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdSlider: boolean | string = false;

	@children("md-carousel-item")
	items: Element[] = [];

	attached() {
		if (getBooleanFromAttributeValue(this.mdSlider)) {
			this.element.classList.add("carousel-slider");
		}
		this.refresh();
	}

	detached() {
		$(this.element).carousel("destroy");
	}

	itemsChanged(newValue) {
		this.refresh();
	}

	refresh() {
		if (this.items.length > 0) {
			const options = {
				full_width: getBooleanFromAttributeValue(this.mdSlider),
				fullWidth: getBooleanFromAttributeValue(this.mdSlider),
				indicators: this.mdIndicators
			};

			this.taskQueue.queueTask(() => {
				$(this.element).carousel(options);
			});
		}
	}
}
