'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging', '../common/events'], function (_export, _context) {
  var bindable, customAttribute, BindingEngine, inject, TaskQueue, LogManager, fireEvent, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdSelect;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      BindingEngine = _aureliaBinding.BindingEngine;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }],
    execute: function () {
      _export('MdSelect', MdSelect = (_dec = inject(Element, LogManager, BindingEngine, TaskQueue), _dec2 = customAttribute('md-select'), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdSelect(element, logManager, bindingEngine, taskQueue) {
          _classCallCheck(this, MdSelect);

          _initDefineProp(this, 'disabled', _descriptor, this);

          this._suspendUpdate = false;
          this.subscriptions = [];

          this.element = element;
          this.taskQueue = taskQueue;
          this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
          this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
          this.log = LogManager.getLogger('md-select');
          this.bindingEngine = bindingEngine;
        }

        MdSelect.prototype.attached = function attached() {
          this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

          this.createMaterialSelect(false);
          $(this.element).on('change', this.handleChangeFromNativeSelect);
        };

        MdSelect.prototype.detached = function detached() {
          $(this.element).off('change', this.handleChangeFromNativeSelect);
          $(this.element).material_select('destroy');
          this.subscriptions.forEach(function (sub) {
            return sub.dispose();
          });
        };

        MdSelect.prototype.refresh = function refresh() {
          var _this = this;

          this.taskQueue.queueTask(function () {
            _this.createMaterialSelect(true);
          });
        };

        MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
          this.toggleControl(newValue);
        };

        MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
          this.log.debug('selectedOptions changed', arguments);
        };

        MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
          if (!this._suspendUpdate) {
            this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
            this._suspendUpdate = true;
            fireEvent(this.element, 'change');

            this._suspendUpdate = false;
          }
        };

        MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
          this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
          if (!this._suspendUpdate) {
            this.createMaterialSelect(false);
          }
        };

        MdSelect.prototype.toggleControl = function toggleControl(disable) {
          var $wrapper = $(this.element).parent('.select-wrapper');
          if ($wrapper.length > 0) {
            if (disable) {
              $('.caret', $wrapper).addClass('disabled');
              $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
              $wrapper.attr('disabled', 'disabled');
            } else {
              $('.caret', $wrapper).removeClass('disabled');
              $('input.select-dropdown', $wrapper).attr('disabled', null);
              $wrapper.attr('disabled', null);
              $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
            }
          }
        };

        MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
          if (destroy) {
            $(this.element).material_select('destroy');
          }
          $(this.element).material_select();
          this.toggleControl(this.disabled);
        };

        return MdSelect;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('MdSelect', MdSelect);
    }
  };
});