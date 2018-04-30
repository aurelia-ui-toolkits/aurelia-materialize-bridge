import * as au from "../aurelia";

@au.customElement("md-fab")
export class MdFab {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.bindable.stringMd
	mdDirection: "top" | "right" | "buttom" | "left";

	@au.bindable.booleanMd
	mdHoverEnabled: boolean;

	@au.bindable.booleanMd
	toolbarEnabled: boolean;

	instance: M.FloatingActionButton;

	attached() {
		this.element.classList.add("fixed-action-btn");
		let options: Partial<M.FloatingActionButtonOptions> = {
			direction: this.mdDirection,
			hoverEnabled: this.mdHoverEnabled,
			toolbarEnabled: this.toolbarEnabled
		};
		au.cleanOptions(options);
		this.taskQueue.queueTask(() => this.instance = new M.FloatingActionButton(this.element, options));
	}

	detached() {
		this.instance.destroy();
		this.element.classList.remove("fixed-action-btn");
	}

	open() {
		this.instance.open();
	}

	close() {
		this.instance.close();
	}
}
