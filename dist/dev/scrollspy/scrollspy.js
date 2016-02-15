System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, MdScrollSpy;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      MdScrollSpy = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdScrollSpy, [{
          key: 'target',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdScrollSpy(element) {
          _classCallCheck(this, _MdScrollSpy);

          _defineDecoratedPropertyDescriptor(this, 'target', _instanceInitializers);

          this.element = element;
        }

        MdScrollSpy.prototype.attached = function attached() {
          $(this.target, this.element).scrollSpy();
        };

        MdScrollSpy.prototype.detached = function detached() {};

        var _MdScrollSpy = MdScrollSpy;
        MdScrollSpy = inject(Element)(MdScrollSpy) || MdScrollSpy;
        MdScrollSpy = customAttribute('md-scrollspy')(MdScrollSpy) || MdScrollSpy;
        return MdScrollSpy;
      })();

      _export('MdScrollSpy', MdScrollSpy);
    }
  };
});
//# sourceMappingURL=../dist/dev/scrollspy/scrollspy.js.map
