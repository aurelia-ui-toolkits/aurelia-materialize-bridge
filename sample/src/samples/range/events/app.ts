import { Logger } from "../../../shared/logger";

export class App {
	rangeValue = 30;
	logger: Logger;

	onChange(e) {
		this.logger.log(`range value changed to ${this.rangeValue}`);
	}
}
