System.register(['aurelia-framework', '../common/attributes', '../common/cssClassSetter'], function (_export) {
  'use strict';

  var bindable, customElement, inject, getBooleanFromAttributeValue, CssClassSetter, MdNavbar;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonCssClassSetter) {
      CssClassSetter = _commonCssClassSetter.CssClassSetter;
    }],
    execute: function () {
      MdNavbar = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdNavbar, [{
          key: 'fixed',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdNavbar(element) {
          _classCallCheck(this, _MdNavbar);

          _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers);

          this.element = element;
        }

        MdNavbar.prototype.attached = function attached() {
          this.fixedClassSetter = new CssClassSetter(this.fixedAnchor);
          if (getBooleanFromAttributeValue(this.fixed)) {
            this.fixedClassSetter.addClasses('navbar-fixed');
          }
        };

        MdNavbar.prototype.detached = function detached() {
          if (getBooleanFromAttributeValue(this.fixed)) {
            this.fixedClassSetter.removeClasses('navbar-fixed');
          }
        };

        var _MdNavbar = MdNavbar;
        MdNavbar = inject(Element)(MdNavbar) || MdNavbar;
        MdNavbar = customElement('md-navbar')(MdNavbar) || MdNavbar;
        return MdNavbar;
      })();

      _export('MdNavbar', MdNavbar);
    }
  };
});
//# sourceMappingURL=../dist/dev/navbar/navbar.js.map
