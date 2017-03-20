'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, MdTooltip;

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
      _export('MdTooltip', MdTooltip = (_dec = customAttribute('md-tooltip'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdTooltip(element) {
          _classCallCheck(this, MdTooltip);

          _initDefineProp(this, 'position', _descriptor, this);

          _initDefineProp(this, 'delay', _descriptor2, this);

          _initDefineProp(this, 'html', _descriptor3, this);

          _initDefineProp(this, 'text', _descriptor4, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdTooltip.prototype.bind = function bind() {
          this.html = getBooleanFromAttributeValue(this.html);
        };

        MdTooltip.prototype.attached = function attached() {
          this.attributeManager.addClasses('tooltipped');
          this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
          this.initTooltip();
        };

        MdTooltip.prototype.detached = function detached() {
          $(this.element).tooltip('remove');
          this.attributeManager.removeClasses('tooltipped');
          this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
        };

        MdTooltip.prototype.textChanged = function textChanged() {
          this.attributeManager.addAttributes({ 'data-tooltip': this.text });
          this.initTooltip();
        };

        MdTooltip.prototype.initTooltip = function initTooltip() {
          $(this.element).tooltip('remove');
          $(this.element).tooltip({
            delay: parseInt(this.delay, 10),
            html: this.html
          });
        };

        return MdTooltip;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'position', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 'bottom';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'delay', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'html', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _export('MdTooltip', MdTooltip);
    }
  };
});