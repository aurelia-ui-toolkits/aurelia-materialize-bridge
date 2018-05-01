import * as au from "../aurelia";

@au.customElement("md-fab")
export class MdFab {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.bindable.stringMd({defaultBindingMode: au.bindingMode.oneTime})
	mdDirection: "top" | "right" | "buttom" | "left";

	@au.bindable.booleanMd({defaultBindingMode: au.bindingMode.oneTime})
	mdHoverEnabled: boolean;

	@au.bindable.booleanMd({defaultBindingMode: au.bindingMode.oneTime})
	mdToolbarEnabled: boolean;

	instance: M.FloatingActionButton;

	attached() {
		this.element.classList.add("fixed-action-btn");
		if (this.mdToolbarEnabled) {
			this.element.classList.add("toolbar");
		}
		let options: Partial<M.FloatingActionButtonOptions> = {
			direction: this.mdDirection,
			hoverEnabled: this.mdHoverEnabled,
			toolbarEnabled: this.mdToolbarEnabled
		};
		au.cleanOptions(options);
		this.taskQueue.queueTask(() => this.instance = new M.FloatingActionButton(this.element, options));
	}

	detached() {
		this.instance.destroy();
		this.element.classList.remove("fixed-action-btn");
		this.element.classList.remove("toolbar");
	}

	open() {
		this.instance.open();
	}

	close() {
		this.instance.close();
	}
}
