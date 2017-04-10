'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdButton;

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
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdButton', MdButton = (_dec = customAttribute('md-button'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdButton(element) {
          _classCallCheck(this, MdButton);

          _initDefineProp(this, 'disabled', _descriptor, this);

          _initDefineProp(this, 'flat', _descriptor2, this);

          _initDefineProp(this, 'floating', _descriptor3, this);

          _initDefineProp(this, 'large', _descriptor4, this);

          _initDefineProp(this, 'pulse', _descriptor5, this);

          this.attributeManager = new AttributeManager(element);
        }

        MdButton.prototype.attached = function attached() {
          var classes = [];

          if (getBooleanFromAttributeValue(this.flat)) {
            classes.push('btn-flat');
          }
          if (getBooleanFromAttributeValue(this.floating)) {
            classes.push('btn-floating');
          }
          if (getBooleanFromAttributeValue(this.large)) {
            classes.push('btn-large');
          }

          if (classes.length === 0) {
            classes.push('btn');
          }

          if (getBooleanFromAttributeValue(this.disabled)) {
            classes.push('disabled');
          }

          if (!getBooleanFromAttributeValue(this.flat)) {
            classes.push('accent');
          }
          if (getBooleanFromAttributeValue(this.pulse)) {
            classes.push('pulse');
          }
          this.attributeManager.addClasses(classes);
        };

        MdButton.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled', 'pulse']);
        };

        MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
          if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses('disabled');
          } else {
            this.attributeManager.removeClasses('disabled');
          }
        };

        MdButton.prototype.flatChanged = function flatChanged(newValue) {
          if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.removeClasses(['btn', 'accent']);
            this.attributeManager.addClasses('btn-flat');
          } else {
            this.attributeManager.removeClasses('btn-flat');
            this.attributeManager.addClasses(['btn', 'accent']);
          }
        };

        MdButton.prototype.pulseChanged = function pulseChanged(newValue) {
          if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses('pulse');
          } else {
            this.attributeManager.removeClasses('pulse');
          }
        };

        return MdButton;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'flat', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'floating', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'large', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('MdButton', MdButton);
    }
  };
});
//# sourceMappingURL=../dist/dev/button/button.js.map
