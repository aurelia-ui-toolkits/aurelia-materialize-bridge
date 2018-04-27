import * as tslib_1 from "tslib";
import { TaskQueue } from "aurelia-task-queue";
import { autoinject } from "aurelia-dependency-injection";
import { getLogger } from "aurelia-logging";
var MdInputUpdateService = /** @class */ (function () {
    function MdInputUpdateService(taskQueue) {
        this.taskQueue = taskQueue;
        this.updateCalled = false;
        this.log = getLogger("MdInputUpdateService");
        this.taskQueue = taskQueue;
    }
    MdInputUpdateService.prototype.materializeUpdate = function () {
        this.log.debug("executing M.updateTextFields");
        M.updateTextFields();
        this.updateCalled = false;
    };
    MdInputUpdateService.prototype.update = function () {
        this.log.debug("update called");
        if (!this.updateCalled) {
            this.updateCalled = true;
            this.taskQueue.queueTask(this.materializeUpdate.bind(this));
        }
    };
    MdInputUpdateService = tslib_1.__decorate([
        autoinject,
        tslib_1.__metadata("design:paramtypes", [TaskQueue])
    ], MdInputUpdateService);
    return MdInputUpdateService;
}());
export { MdInputUpdateService };
//# sourceMappingURL=input-update-service.js.map