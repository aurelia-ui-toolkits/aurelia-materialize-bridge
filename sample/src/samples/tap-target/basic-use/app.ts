import { MdTapTarget } from "aurelia-materialize-bridge";

export class App {
	tapTarget: MdTapTarget;

	openTapTarget() {
		this.tapTarget.open();
	}

	closeTapTarget() {
		this.tapTarget.close();
	}
}
