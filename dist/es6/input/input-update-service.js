import { TaskQueue } from 'aurelia-task-queue';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@inject(TaskQueue)
export class MdInputUpdateService {
  _updateCalled = false;
  constructor(taskQueue) {
    this.log = getLogger('MdInputUpdateService');
    this.taskQueue = taskQueue;
  }

  materializeUpdate() {
    this.log.debug('executing Materialize.updateTextFields');
    Materialize.updateTextFields();
    this._updateCalled = false;
  }

  update() {
    this.log.debug('update called');
    if (!this._updateCalled) {
      this._updateCalled = true;
      this.taskQueue.queueTask(this.materializeUpdate.bind(this));
    }
  }
}
