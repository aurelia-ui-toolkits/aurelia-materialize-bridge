define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'materialize'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _materialize) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdFadeinImage = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdFadeinImage, [{
      key: 'ref',
      decorators: [_aureliaTemplating.bindable()],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function MdFadeinImage(element) {
      _classCallCheck(this, _MdFadeinImage);

      _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers);

      this.element = element;
      this.fadeInImage = this.fadeInImage.bind(this);
    }

    MdFadeinImage.prototype.attached = function attached() {
      this.element.addEventListener('click', this.fadeInImage);
    };

    MdFadeinImage.prototype.detached = function detached() {
      this.element.removeEventListener('click', this.fadeInImage);
    };

    MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
      Materialize.fadeInImage(this.ref);
    };

    var _MdFadeinImage = MdFadeinImage;
    MdFadeinImage = _aureliaDependencyInjection.inject(Element)(MdFadeinImage) || MdFadeinImage;
    MdFadeinImage = _aureliaTemplating.customAttribute('md-fadein-image')(MdFadeinImage) || MdFadeinImage;
    return MdFadeinImage;
  })();

  exports.MdFadeinImage = MdFadeinImage;
});