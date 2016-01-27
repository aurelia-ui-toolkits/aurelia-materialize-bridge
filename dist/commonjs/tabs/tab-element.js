'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var MdTab = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdTab, [{
    key: 'forElement',
    decorators: [_aureliaFramework.bindable({
      attribute: 'for-element',
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'tab',
    decorators: [_aureliaFramework.bindable({
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaFramework.bindable({
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers);

  function MdTab(element) {
    _classCallCheck(this, _MdTab);

    _defineDecoratedPropertyDescriptor(this, 'forElement', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'tab', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

    this.element = element;
  }

  MdTab.prototype.attached = function attached() {};

  MdTab.prototype.detached = function detached() {};

  MdTab.prototype.forElementChanged = function forElementChanged(newValue) {};

  var _MdTab = MdTab;
  MdTab = _aureliaFramework.inject(Element)(MdTab) || MdTab;
  MdTab = _aureliaFramework.containerless()(MdTab) || MdTab;
  MdTab = _aureliaFramework.customElement('md-tab')(MdTab) || MdTab;
  return MdTab;
})();

exports.MdTab = MdTab;