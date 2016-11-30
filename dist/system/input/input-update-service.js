'use strict';

System.register(['aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var TaskQueue, inject, getLogger, _dec, _class, MdInputUpdateService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdInputUpdateService', MdInputUpdateService = (_dec = inject(TaskQueue), _dec(_class = function () {
        function MdInputUpdateService(taskQueue) {
          _classCallCheck(this, MdInputUpdateService);

          this._updateCalled = false;

          this.log = getLogger('MdInputUpdateService');
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
      }()) || _class));

      _export('MdInputUpdateService', MdInputUpdateService);
    }
  };
});