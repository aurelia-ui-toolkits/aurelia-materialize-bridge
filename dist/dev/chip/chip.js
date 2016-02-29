System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, inject, getBooleanFromAttributeValue, MdChip;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdChip = (function () {
        var _instanceInitializers = {};

        function MdChip() {
          _classCallCheck(this, _MdChip);

          _defineDecoratedPropertyDescriptor(this, 'mdClose', _instanceInitializers);
        }

        MdChip.prototype.attached = function attached() {
          this.mdClose = getBooleanFromAttributeValue(this.mdClose);
        };

        _createDecoratedClass(MdChip, [{
          key: 'mdClose',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _MdChip = MdChip;
        MdChip = inject(Element)(MdChip) || MdChip;
        MdChip = customElement('md-chip')(MdChip) || MdChip;
        return MdChip;
      })();

      _export('MdChip', MdChip);
    }
  };
});
//# sourceMappingURL=../dist/dev/chip/chip.js.map
