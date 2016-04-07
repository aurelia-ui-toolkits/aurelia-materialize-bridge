define(['exports', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdInputUpdateService = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MdInputUpdateService = exports.MdInputUpdateService = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue), _dec(_class = function () {
    function MdInputUpdateService(taskQueue) {
      _classCallCheck(this, MdInputUpdateService);

      this._updateCalled = false;

      this.log = (0, _aureliaLogging.getLogger)('MdInputUpdateService');
      this.taskQueue = taskQueue;
    }

    MdInputUpdateService.prototype.materializeUpdate = function materializeUpdate() {
      this.log.debug('executing Materialize.updateTextFields');
      Materialize.updateTextFields();
      this._updateCalled = false;
    };

    MdInputUpdateService.prototype.update = function update() {
      this.log.debug('update called');
      if (!this._updateCalled) {
        this._updateCalled = true;
        this.taskQueue.queueTask(this.materializeUpdate.bind(this));
      }
    };

    return MdInputUpdateService;
  }()) || _class);
});