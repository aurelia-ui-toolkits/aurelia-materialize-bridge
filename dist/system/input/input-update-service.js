System.register(["tslib", "aurelia-task-queue", "aurelia-dependency-injection", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_task_queue_1, aurelia_dependency_injection_1, aurelia_logging_1, MdInputUpdateService;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_task_queue_1_1) {
                aurelia_task_queue_1 = aurelia_task_queue_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdInputUpdateService = /** @class */ (function () {
                function MdInputUpdateService(taskQueue) {
                    this.taskQueue = taskQueue;
                    this.updateCalled = false;
                    this.log = aurelia_logging_1.getLogger("MdInputUpdateService");
                    this.taskQueue = taskQueue;
                }
                MdInputUpdateService.prototype.materializeUpdate = function () {
                    this.log.debug("executing Materialize.updateTextFields");
                    Materialize.updateTextFields();
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
            exports_1("MdInputUpdateService", MdInputUpdateService);
        }
    };
});
//# sourceMappingURL=input-update-service.js.map