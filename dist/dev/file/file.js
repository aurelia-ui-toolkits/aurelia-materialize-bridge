'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, fireEvent, fireMaterializeEvent, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, MdFileInput;

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
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdFileInput', MdFileInput = (_dec = customElement('md-file'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdFileInput(element) {
          _classCallCheck(this, MdFileInput);

          _initDefineProp(this, 'mdCaption', _descriptor, this);

          _initDefineProp(this, 'mdMultiple', _descriptor2, this);

          _initDefineProp(this, 'mdLabelValue', _descriptor3, this);

          _initDefineProp(this, 'disabled', _descriptor4, this);

          this.files = [];
          this._suspendUpdate = false;

          this.element = element;
          this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
        }

        MdFileInput.prototype.attached = function attached() {
          this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
          $(this.filePath).on('change', this.handleChangeFromNativeInput);
        };

        MdFileInput.prototype.detached = function detached() {
          $(this.element).off('change', this.handleChangeFromNativeInput);
        };

        MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
          if (!this._suspendUpdate) {
            this._suspendUpdate = true;
            fireEvent(this.filePath, 'change', { files: this.files });
            fireMaterializeEvent(this.filePath, 'change', { files: this.files });
            this._suspendUpdate = false;
          }
        };

        return MdFileInput;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdCaption', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 'File';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdMultiple', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelValue', [_dec5], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('MdFileInput', MdFileInput);
    }
  };
});
//# sourceMappingURL=../dist/dev/file/file.js.map
