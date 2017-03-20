'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-binding', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inject, bindingMode, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdCard;

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

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdCard', MdCard = (_dec = customElement('md-card'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = bindable({
        defaultBindingMode: bindingMode.oneWay
      }), _dec7 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdCard(element) {
          _classCallCheck(this, MdCard);

          _initDefineProp(this, 'mdHorizontal', _descriptor, this);

          _initDefineProp(this, 'mdImage', _descriptor2, this);

          _initDefineProp(this, 'mdReveal', _descriptor3, this);

          _initDefineProp(this, 'mdSize', _descriptor4, this);

          _initDefineProp(this, 'mdTitle', _descriptor5, this);

          this.element = element;
        }

        MdCard.prototype.attached = function attached() {
          this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
          this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
        };

        return MdCard;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdHorizontal', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdImage', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdReveal', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdSize', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec7], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdCard', MdCard);
    }
  };
});