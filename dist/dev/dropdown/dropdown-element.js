'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp, MdDropdownElement;

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
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdDropdownElement', MdDropdownElement = (_dec = customElement('md-dropdown'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec7 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec9 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec10 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdDropdownElement(element) {
          _classCallCheck(this, MdDropdownElement);

          _initDefineProp(this, 'alignment', _descriptor, this);

          _initDefineProp(this, 'belowOrigin', _descriptor2, this);

          _initDefineProp(this, 'constrainWidth', _descriptor3, this);

          _initDefineProp(this, 'gutter', _descriptor4, this);

          _initDefineProp(this, 'hover', _descriptor5, this);

          _initDefineProp(this, 'mdTitle', _descriptor6, this);

          _initDefineProp(this, 'inDuration', _descriptor7, this);

          _initDefineProp(this, 'outDuration', _descriptor8, this);

          this.element = element;
          this.controlId = 'md-dropdown-' + MdDropdown.id++;
        }

        MdDropdownElement.prototype.attached = function attached() {
          $(this.element).dropdown({
            alignment: this.alignment,
            belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
            constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
            gutter: parseInt(this.gutter, 10),
            hover: getBooleanFromAttributeValue(this.hover),
            inDuration: parseInt(this.inDuration, 10),
            outDuration: parseInt(this.outDuration, 10)
          });
        };

        return MdDropdownElement;
      }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'alignment', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 'left';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'belowOrigin', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'constrainWidth', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'gutter', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'hover', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec8], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'inDuration', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'outDuration', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 225;
        }
      })), _class2)) || _class) || _class));

      _export('MdDropdownElement', MdDropdownElement);
    }
  };
});
//# sourceMappingURL=../dist/dev/dropdown/dropdown-element.js.map
