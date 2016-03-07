define(['exports', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdInputUpdateService = (function () {
    function MdInputUpdateService(taskQueue) {
      _classCallCheck(this, _MdInputUpdateService);

      this._updateCalled = false;

      this.log = _aureliaLogging.getLogger('MdInputUpdateService');
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

    var _MdInputUpdateService = MdInputUpdateService;
    MdInputUpdateService = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue)(MdInputUpdateService) || MdInputUpdateService;
    return MdInputUpdateService;
  })();

  exports.MdInputUpdateService = MdInputUpdateService;
});