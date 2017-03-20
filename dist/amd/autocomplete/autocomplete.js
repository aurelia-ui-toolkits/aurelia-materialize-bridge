define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdAutoComplete = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdAutoComplete = exports.MdAutoComplete = (_dec = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdAutoComplete(element) {
      _classCallCheck(this, MdAutoComplete);

      this.input = null;

      _initDefineProp(this, 'values', _descriptor, this);

      this.element = element;
    }

    MdAutoComplete.prototype.attached = function attached() {
      if (this.element.tagName.toLowerCase() === 'input') {
        this.input = this.element;
      } else if (this.element.tagName.toLowerCase() === 'md-input') {
        this.input = this.element.au.controller.viewModel.input;
      } else {
        throw new Error('md-autocomplete must be attached to either an input or md-input element');
      }
      this.refresh();
    };

    MdAutoComplete.prototype.detached = function detached() {
      $(this.input).siblings('.autocomplete-content').off('click');
      $(this.input).siblings('.autocomplete-content').remove();
    };

    MdAutoComplete.prototype.refresh = function refresh() {
      var _this = this;

      this.detached();
      $(this.input).autocomplete({
        data: this.values
      });

      $(this.input).siblings('.autocomplete-content').on('click', function () {
        (0, _events.fireEvent)(_this.input, 'change');
      });
    };

    MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
      this.refresh();
    };

    return MdAutoComplete;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'values', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  })), _class2)) || _class) || _class);
});