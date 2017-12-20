System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../config-builder'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, ConfigBuilder, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdWaves;

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
    }, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }],
    execute: function () {
      _export('MdWaves', MdWaves = (_dec = customAttribute('md-waves'), _dec2 = inject(Element, ConfigBuilder), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdWaves(element, configBuilder) {
          _classCallCheck(this, MdWaves);

          _initDefineProp(this, 'block', _descriptor, this);

          _initDefineProp(this, 'circle', _descriptor2, this);

          _initDefineProp(this, 'color', _descriptor3, this);

          this.element = element;
          this.configBuilder = configBuilder;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdWaves.prototype.attached = function attached() {
          var classes = ['waves-effect'];
          if (getBooleanFromAttributeValue(this.block)) {
            classes.push('waves-block');
          }
          if (getBooleanFromAttributeValue(this.circle)) {
            classes.push('waves-circle');
          }
          if (this.color) {
            classes.push('waves-' + this.color);
          }

          this.attributeManager.addClasses(classes);
          if (!this.configBuilder.noWavesAttach) {
            Waves.attach(this.element);
          }
        };

        MdWaves.prototype.detached = function detached() {
          var classes = ['waves-effect', 'waves-block'];
          if (this.color) {
            classes.push('waves-' + this.color);
          }

          this.attributeManager.removeClasses(classes);
        };

        return MdWaves;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'block', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'circle', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec5], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdWaves', MdWaves);
    }
  };
});