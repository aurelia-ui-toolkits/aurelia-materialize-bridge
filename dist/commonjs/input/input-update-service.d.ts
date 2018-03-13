import { TaskQueue } from "aurelia-task-queue";
import { Logger } from "aurelia-logging";
export declare class MdInputUpdateService {
    private taskQueue;
    constructor(taskQueue: TaskQueue);
    log: Logger;
    updateCalled: boolean;
    materializeUpdate(): void;
    update(): void;
}
