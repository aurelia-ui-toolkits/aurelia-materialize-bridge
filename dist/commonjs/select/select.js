'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var MdSelect = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdSelect, [{
    key: 'selected',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function MdSelect(element, logManager) {
    _classCallCheck(this, _MdSelect);

    _defineDecoratedPropertyDescriptor(this, 'selected', _instanceInitializers);

    this.element = element;
    this.changeHandler = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
  }

  MdSelect.prototype.attached = function attached() {
    $(this.element).material_select();
    $(this.element).on('change', this.changeHandler);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.changeHandler);
    $(this.element).material_select('destroy');
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
    this.selected = $(this.element).val();
  };

  MdSelect.prototype.arraysAreEqual = function arraysAreEqual(array1, array2) {
    var result = true;
    if (array1 && array2) {
      if (typeof array1 === 'string') {
        result = false;
      } else {
        result = array1.length === array2.length && array1.every(function (element, index) {
          return element === array2[index];
        });
      }
    } else {
      result = false;
    }

    return result;
  };

  MdSelect.prototype.selectedChanged = function selectedChanged() {
    if (!this.arraysAreEqual($(this.element).val(), this.selected)) {
      $(this.element).val(this.selected);
      $(this.element).material_select();
    }
  };

  var _MdSelect = MdSelect;
  MdSelect = _aureliaTemplating.customAttribute('md-select')(MdSelect) || MdSelect;
  MdSelect = _aureliaDependencyInjection.inject(Element, LogManager)(MdSelect) || MdSelect;
  return MdSelect;
})();

exports.MdSelect = MdSelect;