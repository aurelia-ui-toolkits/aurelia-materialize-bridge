import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;

	onTabSelected(e) {
		this.logger.log(`tab selected ${e.detail}`);
	}

	onShow(element) {
		this.logger.log(`onShow on element: ${element.attr("id")}`);
	}
}
