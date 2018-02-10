import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;

	logClose() {
		this.logger.log("chip closed");
	}
}
