define(["require", "exports", "tslib", "aurelia-task-queue", "aurelia-dependency-injection", "aurelia-logging"], function (require, exports, tslib_1, aurelia_task_queue_1, aurelia_dependency_injection_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdInputUpdateService = /** @class */ (function () {
        function MdInputUpdateService(taskQueue) {
            this.taskQueue = taskQueue;
            this.updateCalled = false;
            this.log = aurelia_logging_1.getLogger("MdInputUpdateService");
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
            aurelia_dependency_injection_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_task_queue_1.TaskQueue])
        ], MdInputUpdateService);
        return MdInputUpdateService;
    }());
    exports.MdInputUpdateService = MdInputUpdateService;
});
//# sourceMappingURL=input-update-service.js.map