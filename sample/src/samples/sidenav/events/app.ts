import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;

	onShow(e) {
		this.logger.log(`sidenav opened; ${JSON.stringify(e)}`);
	}

	onHide(e) {
		this.logger.log(`sidenav closed; ${JSON.stringify(e)}`);
	}
}
