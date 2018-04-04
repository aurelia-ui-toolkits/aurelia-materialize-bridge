"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_task_queue_1 = require("aurelia-task-queue");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_logging_1 = require("aurelia-logging");
var MdInputUpdateService = /** @class */ (function () {
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
exports.MdInputUpdateService = MdInputUpdateService;
