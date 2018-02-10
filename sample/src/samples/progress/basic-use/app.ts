import { MdInput } from "aurelia-materialize-bridge";

export class App {
	inputValue: MdInput;

	value = 15;

	setNull() {
		this.inputValue.mdValue = null;
	}
}
