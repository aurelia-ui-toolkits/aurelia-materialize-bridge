import { MdSelect } from "aurelia-materialize-bridge";

export class App {
	select: MdSelect;

	triggerSelect() {
		this.select.open();
	}
}
