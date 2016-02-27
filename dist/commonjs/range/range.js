'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaLogging = require('aurelia-logging');

var MdRange = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdRange, [{
    key: 'mdMin',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }, {
    key: 'mdMax',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 100;
    },
    enumerable: true
  }, {
    key: 'mdStep',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 1;
    },
    enumerable: true
  }, {
    key: 'mdValue',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }], null, _instanceInitializers);

  function MdRange(element) {
    _classCallCheck(this, _MdRange);

    _defineDecoratedPropertyDescriptor(this, 'mdMin', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'mdMax', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'mdStep', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'mdValue', _instanceInitializers);

    this.element = element;
    this.log = _aureliaLogging.getLogger('md-range');
  }

  var _MdRange = MdRange;
  MdRange = _aureliaDependencyInjection.inject(Element)(MdRange) || MdRange;
  MdRange = _aureliaTemplating.customElement('md-range')(MdRange) || MdRange;
  return MdRange;
})();

exports.MdRange = MdRange;