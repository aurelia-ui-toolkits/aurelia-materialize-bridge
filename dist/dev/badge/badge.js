System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, AttributeManager, getBooleanFromAttributeValue, MdBadge;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdBadge = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdBadge, [{
          key: 'isNew',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdBadge(element) {
          _classCallCheck(this, _MdBadge);

          _defineDecoratedPropertyDescriptor(this, 'isNew', _instanceInitializers);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdBadge.prototype.attached = function attached() {
          var classes = ['badge'];
          if (getBooleanFromAttributeValue(this.isNew)) {
            classes.push('new');
          }
          this.attributeManager.addClasses(classes);
        };

        MdBadge.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['badge', 'new']);
        };

        var _MdBadge = MdBadge;
        MdBadge = inject(Element)(MdBadge) || MdBadge;
        MdBadge = customAttribute('md-badge')(MdBadge) || MdBadge;
        return MdBadge;
      })();

      _export('MdBadge', MdBadge);
    }
  };
});
//# sourceMappingURL=../dist/dev/badge/badge.js.map
