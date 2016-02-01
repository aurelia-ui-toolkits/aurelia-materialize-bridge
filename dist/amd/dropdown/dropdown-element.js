define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _commonAttributes) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdDropdownElement = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdDropdownElement, [{
      key: 'alignment',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return 'left';
      },
      enumerable: true
    }, {
      key: 'belowOrigin',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'constrainWidth',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'gutter',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return 0;
      },
      enumerable: true
    }, {
      key: 'hover',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'mdTitle',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: null,
      enumerable: true
    }, {
      key: 'inDuration',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return 300;
      },
      enumerable: true
    }, {
      key: 'outDuration',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return 225;
      },
      enumerable: true
    }], [{
      key: 'id',
      value: 0,
      enumerable: true
    }], _instanceInitializers);

    function MdDropdownElement(element) {
      _classCallCheck(this, _MdDropdownElement);

      _defineDecoratedPropertyDescriptor(this, 'alignment', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'belowOrigin', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'constrainWidth', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'gutter', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'hover', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'inDuration', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'outDuration', _instanceInitializers);

      this.element = element;
      this.controlId = 'md-dropdown-' + MdDropdown.id++;
    }

    MdDropdownElement.prototype.attached = function attached() {
      $(this.element).dropdown({
        alignment: this.alignment,
        belowOrigin: _commonAttributes.getBooleanFromAttributeValue(this.belowOrigin),
        constrain_width: _commonAttributes.getBooleanFromAttributeValue(this.constrainWidth),
        gutter: parseInt(this.gutter, 10),
        hover: _commonAttributes.getBooleanFromAttributeValue(this.hover),
        inDuration: parseInt(this.inDuration, 10),
        outDuration: parseInt(this.outDuration, 10)
      });
    };

    var _MdDropdownElement = MdDropdownElement;
    MdDropdownElement = _aureliaDependencyInjection.inject(Element)(MdDropdownElement) || MdDropdownElement;
    MdDropdownElement = _aureliaTemplating.customElement('md-dropdown')(MdDropdownElement) || MdDropdownElement;
    return MdDropdownElement;
  })();

  exports.MdDropdownElement = MdDropdownElement;
});