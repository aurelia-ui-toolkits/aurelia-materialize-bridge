System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, MdScrollfireTarget;

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
      MdScrollfireTarget = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdScrollfireTarget, [{
          key: 'callback',
          decorators: [bindable()],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'offset',
          decorators: [bindable()],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdScrollfireTarget(element) {
          _classCallCheck(this, _MdScrollfireTarget);

          _defineDecoratedPropertyDescriptor(this, 'callback', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'offset', _instanceInitializers);

          this.element = element;
        }

        var _MdScrollfireTarget = MdScrollfireTarget;
        MdScrollfireTarget = inject(Element)(MdScrollfireTarget) || MdScrollfireTarget;
        MdScrollfireTarget = customAttribute('md-scrollfire-target')(MdScrollfireTarget) || MdScrollfireTarget;
        return MdScrollfireTarget;
      })();

      _export('MdScrollfireTarget', MdScrollfireTarget);
    }
  };
});