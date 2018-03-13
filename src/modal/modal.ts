import { getLogger, Logger } from "aurelia-logging";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { fireMaterializeEvent } from "../common/events";

@customAttribute("md-modal")
@autoinject
export class MdModal {
	constructor(private element: Element) {
		this.log = getLogger("md-modal");
		this.attributeManager = new AttributeManager(this.element);
		this.onComplete = this.onComplete.bind(this);
		this.onReady = this.onReady.bind(this);
	}

	log: Logger;
	attributeManager: AttributeManager;

	@bindable()
	dismissible: boolean | string = true;

	@bindable
	opacity: number | string = 0.5; // Opacity of modal background

	@bindable
	inDuration: number | string = 300; // Transition in duration

	@bindable
	outDuration: number | string = 200; // Transition out duration

	@bindable
	startingTop: string = "4%"; // Starting top style attribute

	@bindable
	endingTop: string = "10%"; // Ending top style attribute

	attached() {
		const options = {
			complete: this.onComplete,
			dismissible: getBooleanFromAttributeValue(this.dismissible),
			endingTop: this.endingTop,
			inDuration: parseInt(this.inDuration.toString(), 10),
			opacity: parseFloat(this.opacity.toString()),
			outDuration: parseInt(this.outDuration.toString(), 10),
			ready: this.onReady,
			startingTop: this.startingTop
		};
		this.log.debug("modal options: ", options);
		this.attributeManager.addClasses("modal");
		$(this.element).modal(options);
	}

	detached() {
		this.attributeManager.removeClasses("modal");
	}

	onComplete() {
		fireMaterializeEvent(this.element, "modal-complete");
	}

	onReady(modal, trigger) {
		fireMaterializeEvent(this.element, "modal-ready", { modal, trigger });
	}

	open() {
		$(this.element).modal("open");
	}

	close() {
		$(this.element).modal("close");
	}
}
