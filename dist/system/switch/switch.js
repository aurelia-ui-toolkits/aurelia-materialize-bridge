'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', '../common/events'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, getBooleanFromAttributeValue, fireEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdSwitch;

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
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }],
    execute: function () {
      _export('MdSwitch', MdSwitch = (_dec = customElement('md-switch'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdSwitch(element) {
          _classCallCheck(this, MdSwitch);

          _initDefineProp(this, 'mdChecked', _descriptor, this);

          _initDefineProp(this, 'mdDisabled', _descriptor2, this);

          _initDefineProp(this, 'mdReadonly', _descriptor3, this);

          _initDefineProp(this, 'mdLabelOff', _descriptor4, this);

          _initDefineProp(this, 'mdLabelOn', _descriptor5, this);

          this.element = element;
          this.handleChange = this.handleChange.bind(this);
        }

        MdSwitch.prototype.attached = function attached() {
          this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
          if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
          }
          this.checkbox.addEventListener('change', this.handleChange);
          this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
        };

        MdSwitch.prototype.detached = function detached() {
          this.checkbox.removeEventListener('change', this.handleChange);
        };

        MdSwitch.prototype.handleChange = function handleChange() {
          this.mdChecked = this.checkbox.checked;
          fireEvent(this.element, 'blur');
        };

        MdSwitch.prototype.blur = function blur() {
          fireEvent(this.element, 'blur');
        };

        MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.checked = !!newValue;
          }
        };

        MdSwitch.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
          }
        };

        return MdSwitch;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelOff', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'Off';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelOn', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 'On';
        }
      })), _class2)) || _class) || _class));

      _export('MdSwitch', MdSwitch);
    }
  };
});