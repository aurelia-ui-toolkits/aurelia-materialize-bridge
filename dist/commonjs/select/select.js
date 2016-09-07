'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdSelect = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var _events = require('../common/events');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var MdSelect = exports.MdSelect = (_dec = (0, _aureliaDependencyInjection.inject)(Element, LogManager, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec2 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function MdSelect(element, logManager, bindingEngine, taskQueue) {
    _classCallCheck(this, MdSelect);

    _initDefineProp(this, 'disabled', _descriptor, this);

    _initDefineProp(this, 'label', _descriptor2, this);

    this._suspendUpdate = false;
    this.subscriptions = [];
    this.input = null;

    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.bindingEngine = bindingEngine;
  }

  MdSelect.prototype.attached = function attached() {
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    this.createMaterialSelect(false);

    if (this.label) {
      var wrapper = $(this.element).parent('.select-wrapper');
      var div = $('<div class="input-field"></div>');
      var va = this.element.attributes.getNamedItem('validate');
      if (va) {
        div.attr(va.name, va.label);
      }
      wrapper.wrap(div);
      $('<label>' + this.label + '</label>').insertAfter(wrapper);
    }
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    this.attachBlur(false);
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

  MdSelect.prototype.handleBlur = function handleBlur() {
    this.log.debug('handleBlur called');

    (0, _events.fireEvent)(this.element, 'blur');
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
      (0, _events.fireEvent)(this.element, 'change');
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

  MdSelect.prototype.attachBlur = function attachBlur(attach) {
    if (attach) {
      var $wrapper = $(this.element).parent('.select-wrapper');
      if ($wrapper.length > 0) {
        this.input = $('input.select-dropdown:first', $wrapper);
        if (this.input) {
          this.input.on('blur', this.handleBlur);
        }
      }
    } else {
        if (this.input) {
          this.input.off('blur', this.handleBlur);
          this.input = null;
        }
      }
  };

  MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
    this.attachBlur(false);
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    this.toggleControl(this.disabled);
    this.attachBlur(true);
  };

  return MdSelect;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class2)) || _class) || _class);