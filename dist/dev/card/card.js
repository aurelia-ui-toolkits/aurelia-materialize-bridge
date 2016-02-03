System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-binding'], function (_export) {
  'use strict';

  var bindable, customElement, inject, bindingMode, MdCard;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      MdCard = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdCard, [{
          key: 'mdImage',
          decorators: [bindable()],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'mdTitle',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdCard(element) {
          _classCallCheck(this, _MdCard);

          _defineDecoratedPropertyDescriptor(this, 'mdImage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers);

          this.element = element;
        }

        MdCard.prototype.attached = function attached() {};

        var _MdCard = MdCard;
        MdCard = inject(Element)(MdCard) || MdCard;
        MdCard = customElement('md-card')(MdCard) || MdCard;
        return MdCard;
      })();

      _export('MdCard', MdCard);
    }
  };
});
//# sourceMappingURL=../dist/dev/card/card.js.map
