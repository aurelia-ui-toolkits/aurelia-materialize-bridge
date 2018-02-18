import { observable } from "aurelia-framework";

export class App {
	@observable() loanAmount;
	rangeValue;

	constructor() {
		this.loanAmount = 10000.5;
		this.rangeValue = 10000.5;
	}

	loanAmountChanged(newValue) {
		this.rangeValue = newValue;
	}

	onRangeChange(e) {
		this.loanAmount = this.rangeValue;
	}
}
