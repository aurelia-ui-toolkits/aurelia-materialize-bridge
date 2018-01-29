'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdTimePicker = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributes = require('../common/attributes');

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

var MdTimePicker = exports.MdTimePicker = (_dec = (0, _aureliaDependencyInjection.inject)(Element), _dec2 = (0, _aureliaTemplating.customAttribute)('md-timepicker'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
  function MdTimePicker(element) {
    _classCallCheck(this, MdTimePicker);

    _initDefineProp(this, 'twelveHour', _descriptor, this);

    _initDefineProp(this, 'value', _descriptor2, this);

    this.element = element;
    this.updateFromElement = this.updateFromElement.bind(this);
  }

  MdTimePicker.prototype.bind = function bind() {
    this.twelveHour = (0, _attributes.getBooleanFromAttributeValue)(this.twelveHour);
  };

  MdTimePicker.prototype.attached = function attached() {
    var options = {
      twelvehour: this.twelveHour
    };
    $(this.element).pickatime(options);
    this.element.value = this.value;
    $(this.element).on('change', this.updateFromElement);
  };

  MdTimePicker.prototype.detached = function detached() {
    $(this.element).off('change', this.updateFromElement);
    $(this.element).pickatime('remove');
  };

  MdTimePicker.prototype.updateFromElement = function updateFromElement() {
    this.value = this.element.value;
  };

  MdTimePicker.prototype.valueChanged = function valueChanged(newValue) {
    this.element.value = newValue;
  };

  return MdTimePicker;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'twelveHour', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);