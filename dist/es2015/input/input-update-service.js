var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TaskQueue } from "aurelia-task-queue";
import { autoinject } from "aurelia-dependency-injection";
import { getLogger } from "aurelia-logging";
let MdInputUpdateService = class MdInputUpdateService {
    constructor(taskQueue) {
        this.taskQueue = taskQueue;
        this.updateCalled = false;
        this.log = getLogger("MdInputUpdateService");
        this.taskQueue = taskQueue;
    }
    materializeUpdate() {
        this.log.debug("executing Materialize.updateTextFields");
        Materialize.updateTextFields();
        this.updateCalled = false;
    }
    update() {
        this.log.debug("update called");
        if (!this.updateCalled) {
            this.updateCalled = true;
            this.taskQueue.queueTask(this.materializeUpdate.bind(this));
        }
    }
};
MdInputUpdateService = __decorate([
    autoinject,
    __metadata("design:paramtypes", [TaskQueue])
], MdInputUpdateService);
export { MdInputUpdateService };
