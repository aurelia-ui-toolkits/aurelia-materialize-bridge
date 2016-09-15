'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, MdDropdown;

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
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdDropdown', MdDropdown = (_dec = customAttribute('md-dropdown'), _dec2 = inject(Element), _dec3 = bindable({
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
      }), _dec11 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdDropdown(element) {
          _classCallCheck(this, MdDropdown);

          _initDefineProp(this, 'activates', _descriptor, this);

          _initDefineProp(this, 'alignment', _descriptor2, this);

          _initDefineProp(this, 'belowOrigin', _descriptor3, this);

          _initDefineProp(this, 'constrainWidth', _descriptor4, this);

          _initDefineProp(this, 'gutter', _descriptor5, this);

          _initDefineProp(this, 'hover', _descriptor6, this);

          _initDefineProp(this, 'mdTitle', _descriptor7, this);

          _initDefineProp(this, 'inDuration', _descriptor8, this);

          _initDefineProp(this, 'outDuration', _descriptor9, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdDropdown.prototype.attached = function attached() {
          this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

          this.attributeManager.addClasses('dropdown-button');
          this.contentAttributeManager.addClasses('dropdown-content');
          this.attributeManager.addAttributes({ 'data-activates': this.activates });
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

        MdDropdown.prototype.detached = function detached() {
          this.attributeManager.removeAttributes('data-activates');
          this.attributeManager.removeClasses('dropdown-button');
          this.contentAttributeManager.removeClasses('dropdown-content');
        };

        return MdDropdown;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'activates', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'alignment', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 'left';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'belowOrigin', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'constrainWidth', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'gutter', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'hover', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec9], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'inDuration', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'outDuration', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return 225;
        }
      })), _class2)) || _class) || _class));

      _export('MdDropdown', MdDropdown);
    }
  };
});
//# sourceMappingURL=../dist/dev/dropdown/dropdown.js.map
