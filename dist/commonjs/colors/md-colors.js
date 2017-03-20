'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdColors = undefined;

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _aureliaTemplating = require('aurelia-templating');

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

var MdColors = exports.MdColors = (_dec = (0, _aureliaTemplating.bindable)(), _dec2 = (0, _aureliaTemplating.bindable)(), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), (_class = function MdColors() {
  _classCallCheck(this, MdColors);

  _initDefineProp(this, 'mdPrimaryColor', _descriptor, this);

  _initDefineProp(this, 'mdAccentColor', _descriptor2, this);

  _initDefineProp(this, 'mdErrorColor', _descriptor3, this);

  _initDefineProp(this, 'mdSuccessColor', _descriptor4, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'mdPrimaryColor', [_dec], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'mdAccentColor', [_dec2], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'mdErrorColor', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return '#F44336';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'mdSuccessColor', [_dec4], {
  enumerable: true,
  initializer: null
})), _class));