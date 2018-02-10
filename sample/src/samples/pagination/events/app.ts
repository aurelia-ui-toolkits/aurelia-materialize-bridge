import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;
	activePage = 1;

	onPageChanged(e) {
		this.logger.log(`page changed ${e.detail}`);
	}
}
