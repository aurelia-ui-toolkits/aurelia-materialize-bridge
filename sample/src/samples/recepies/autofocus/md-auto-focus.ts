// src: https://gist.github.com/swalters/8d8772d20ee375df61277d5b048e6eb2

import { autoinject, customAttribute, TaskQueue } from "aurelia-framework";

@customAttribute("md-auto-focus")
@autoinject

export class AutoFocus {
	constructor(private element: Element, private taskQueue: TaskQueue) {
		this.element = element;
		this.taskQueue = taskQueue;
	}

	attached() {
		this.taskQueue.queueTask(() => {
			let inputs = this.element.getElementsByTagName("input");
			if (inputs.length > 0) {
				let input = inputs[0];
				input.focus();
				let label = input.nextElementSibling;
				if (label.nodeName === "LABEL") {
					this.taskQueue.queueTask(() => { label.classList.add("active"); });
				}
			}
			else {
				console.warn("No input element found for auto-focus");
			}
		});
	}
}
