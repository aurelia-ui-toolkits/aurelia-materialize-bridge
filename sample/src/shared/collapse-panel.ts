import { bindable } from "aurelia-framework";

export class CollapsePanel {
	@bindable
	title: string;

	@bindable
	footer: string;

	@bindable
	allowCollapse: boolean = false;

	@bindable
	collapsed: boolean = false;

	@bindable
	panelClass: string = "default";

	toggle() {
		if (this.allowCollapse) {
			this.collapsed = !this.collapsed;
		}
	}
}
