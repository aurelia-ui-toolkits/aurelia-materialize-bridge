export class App {

	addChip() {
		this.chips = this.chips.concat({ tag: "new chip" });
	}
	removeChip() {
		this.chips = this.chips.slice(0, this.chips.length - 1);
	}

	chips = [{ tag: "one" }, { tag: "two" }, { tag: "three" }];
}
