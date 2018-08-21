import * as au from "../aurelia";

@au.customElement("click-counter")
export class ClickCounter {
	count = 0;

	increment() {
		this.count++;
	}
}
