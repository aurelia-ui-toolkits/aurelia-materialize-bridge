import { TaskQueue } from "aurelia-task-queue";
import { autoinject } from "aurelia-dependency-injection";
import { getLogger, Logger } from "aurelia-logging";

@autoinject
export class MdInputUpdateService {
	constructor(private taskQueue: TaskQueue) {
		this.log = getLogger("MdInputUpdateService");
		this.taskQueue = taskQueue;
	}

	log: Logger;
	updateCalled = false;

	materializeUpdate() {
		this.log.debug("executing M.updateTextFields");
		M.updateTextFields();
		this.updateCalled = false;
	}

	update() {
		this.log.debug("update called");
		if (!this.updateCalled) {
			this.updateCalled = true;
			this.taskQueue.queueTask(this.materializeUpdate.bind(this));
		}
	}
}
