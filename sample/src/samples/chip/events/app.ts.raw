import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;

	chips = [{ tag: "Apple" }, { tag: "Microsoft" }, { tag: "Google" }];

	addChip() {
		this.chips = this.chips.concat({ tag: "new chip" });
	}
	removeChip() {
		this.chips = this.chips.slice(0, this.chips.length - 1);
	}

	logChange(detail) {
		this.logger.log(`chips changed: ${JSON.stringify(detail)}`);
	}

	logSelect(detail) {
		this.logger.log(`chip selected: ${JSON.stringify(detail)}`);
	}
}
