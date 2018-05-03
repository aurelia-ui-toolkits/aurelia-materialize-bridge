import * as au from "../aurelia";

@au.customElement("md-fab")
export class MdFab {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.ato.bindable.stringMd({defaultBindingMode: au.bindingMode.oneTime})
	direction: "top" | "right" | "buttom" | "left";

	@au.ato.bindable.booleanMd({defaultBindingMode: au.bindingMode.oneTime})
	hoverEnabled: boolean;

	@au.ato.bindable.booleanMd({defaultBindingMode: au.bindingMode.oneTime})
	toolbarEnabled: boolean;

	instance: M.FloatingActionButton;

	attached() {
		this.element.classList.add("fixed-action-btn");
		if (this.toolbarEnabled) {
			this.element.classList.add("toolbar");
		}
		let options: Partial<M.FloatingActionButtonOptions> = {
			direction: this.direction,
			hoverEnabled: this.hoverEnabled,
			toolbarEnabled: this.toolbarEnabled
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
