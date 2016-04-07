define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaLogging, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSelect = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdSelect = exports.MdSelect = (_dec = (0, _aureliaDependencyInjection.inject)(Element, LogManager, _aureliaBinding.ObserverLocator, _aureliaTaskQueue.TaskQueue), _dec2 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec(_class = _dec2(_class = function () {
    function MdSelect(element, logManager, observerLocator, taskQueue) {
      _classCallCheck(this, MdSelect);

      this._suspendUpdate = false;

      this.element = element;
      this.taskQueue = taskQueue;
      this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
      this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
      this.log = LogManager.getLogger('md-select');
      this.observerLocator = observerLocator;
      this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
    }

    MdSelect.prototype.attached = function attached() {
      this.valueObserver.subscribe(this.handleChangeFromViewModel);

      $(this.element).material_select();
      $(this.element).on('change', this.handleChangeFromNativeSelect);
    };

    MdSelect.prototype.detached = function detached() {
      $(this.element).off('change', this.handleChangeFromNativeSelect);
      $(this.element).material_select('destroy');
      this.valueObserver.unsubscribe();
    };

    MdSelect.prototype.refresh = function refresh() {
      var _this = this;

      this.taskQueue.queueTask(function () {
        $(_this.element).material_select('destroy');
        $(_this.element).material_select();
      });
    };

    MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {

      if (!this._suspendUpdate) {
        this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
        this._suspendUpdate = true;
        (0, _events.fireEvent)(this.element, 'change');
        this.log.debug('this.valueObserver.value', this.valueObserver.value);


        this._suspendUpdate = false;
      }
    };

    MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
      this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
      if (!this._suspendUpdate) {
        $(this.element).material_select();
      }
    };

    return MdSelect;
  }()) || _class) || _class);
});