'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp, MdCheckbox;

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
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdCheckbox', MdCheckbox = (_dec = customElement('md-checkbox'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdCheckbox(element) {
          _classCallCheck(this, MdCheckbox);

          _initDefineProp(this, 'mdChecked', _descriptor, this);

          _initDefineProp(this, 'mdDisabled', _descriptor2, this);

          _initDefineProp(this, 'mdReadonly', _descriptor3, this);

          _initDefineProp(this, 'mdFilledIn', _descriptor4, this);

          _initDefineProp(this, 'mdMatcher', _descriptor5, this);

          _initDefineProp(this, 'mdModel', _descriptor6, this);

          this.element = element;
          this.controlId = 'md-checkbox-' + MdCheckbox.id++;
        }

        MdCheckbox.prototype.attached = function attached() {
          this.attributeManager = new AttributeManager(this.checkbox);
          if (getBooleanFromAttributeValue(this.mdFilledIn)) {
            this.attributeManager.addClasses('filled-in');
          }
          if (this.mdChecked === null) {
            this.checkbox.indeterminate = true;
          } else {
            this.checkbox.indeterminate = false;
          }
          if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
          }
          this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
        };

        MdCheckbox.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['filled-in', 'disabled']);
        };

        MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
          }
        };

        return MdCheckbox;
      }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdReadonly', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdFilledIn', [_dec6], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdMatcher', [_dec7], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdModel', [_dec8], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdCheckbox', MdCheckbox);
    }
  };
});