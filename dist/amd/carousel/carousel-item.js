define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdCarouselItem = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdCarouselItem, [{
      key: 'mdHref',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'mdImage',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneWay
      })],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MdCarouselItem(element) {
      _classCallCheck(this, _MdCarouselItem);

      _defineDecoratedPropertyDescriptor(this, 'mdHref', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'mdImage', _instanceInitializers);

      this.element = element;
    }

    MdCarouselItem.prototype.attached = function attached() {};

    var _MdCarouselItem = MdCarouselItem;
    MdCarouselItem = _aureliaDependencyInjection.inject(Element)(MdCarouselItem) || MdCarouselItem;
    MdCarouselItem = _aureliaTemplating.customElement('md-carousel-item')(MdCarouselItem) || MdCarouselItem;
    return MdCarouselItem;
  })();

  exports.MdCarouselItem = MdCarouselItem;
});