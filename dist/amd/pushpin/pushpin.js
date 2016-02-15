define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdPushpin = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdPushpin, [{
      key: 'bottom',
      decorators: [_aureliaTemplating.bindable()],
      initializer: function initializer() {
        return Infinity;
      },
      enumerable: true
    }, {
      key: 'offset',
      decorators: [_aureliaTemplating.bindable()],
      initializer: function initializer() {
        return 0;
      },
      enumerable: true
    }, {
      key: 'top',
      decorators: [_aureliaTemplating.bindable()],
      initializer: function initializer() {
        return 0;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MdPushpin(element) {
      _classCallCheck(this, _MdPushpin);

      _defineDecoratedPropertyDescriptor(this, 'bottom', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'offset', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'top', _instanceInitializers);

      this.element = element;
    }

    MdPushpin.prototype.attached = function attached() {
      $(this.element).pushpin({
        bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
        offset: parseInt(this.offset, 10),
        top: parseInt(this.top, 10)
      });
    };

    MdPushpin.prototype.detached = function detached() {};

    var _MdPushpin = MdPushpin;
    MdPushpin = _aureliaDependencyInjection.inject(Element)(MdPushpin) || MdPushpin;
    MdPushpin = _aureliaTemplating.customAttribute('md-pushpin')(MdPushpin) || MdPushpin;
    return MdPushpin;
  })();

  exports.MdPushpin = MdPushpin;
});