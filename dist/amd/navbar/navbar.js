define(['exports', 'aurelia-framework', '../common/attributes', '../common/attributeManager'], function (exports, _aureliaFramework, _commonAttributes, _commonAttributeManager) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdNavbar = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdNavbar, [{
      key: 'fixed',
      decorators: [_aureliaFramework.bindable()],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function MdNavbar(element) {
      _classCallCheck(this, _MdNavbar);

      _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers);

      this.element = element;
    }

    MdNavbar.prototype.attached = function attached() {
      this.fixedAttributeManager = new _commonAttributeManager.AttributeManager(this.fixedAnchor);
      if (_commonAttributes.getBooleanFromAttributeValue(this.fixed)) {
        this.fixedAttributeManager.addClasses('navbar-fixed');
      }
    };

    MdNavbar.prototype.detached = function detached() {
      if (_commonAttributes.getBooleanFromAttributeValue(this.fixed)) {
        this.fixedAttributeManager.removeClasses('navbar-fixed');
      }
    };

    var _MdNavbar = MdNavbar;
    MdNavbar = _aureliaFramework.inject(Element)(MdNavbar) || MdNavbar;
    MdNavbar = _aureliaFramework.customElement('md-navbar')(MdNavbar) || MdNavbar;
    return MdNavbar;
  })();

  exports.MdNavbar = MdNavbar;
});