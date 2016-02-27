System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, getLogger, MdRange;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      MdRange = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdRange, [{
          key: 'mdMin',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }, {
          key: 'mdMax',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 100;
          },
          enumerable: true
        }, {
          key: 'mdStep',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'mdValue',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
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
          this.log = getLogger('md-range');
        }

        var _MdRange = MdRange;
        MdRange = inject(Element)(MdRange) || MdRange;
        MdRange = customElement('md-range')(MdRange) || MdRange;
        return MdRange;
      })();

      _export('MdRange', MdRange);
    }
  };
});
//# sourceMappingURL=../dist/dev/range/range.js.map
