System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, bindingMode, inject, AttributeManager, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdBox;

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
    }],
    execute: function () {
      _export('MdBox', MdBox = (_dec = customAttribute('md-box'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdBox(element) {
          _classCallCheck(this, MdBox);

          _initDefineProp(this, 'caption', _descriptor, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdBox.prototype.attached = function attached() {
          this.attributeManager.addClasses('materialboxed');
          if (this.caption) {
            this.attributeManager.addAttributes({ 'data-caption': this.caption });
          }

          $(this.element).materialbox();
        };

        MdBox.prototype.detached = function detached() {
          this.attributeManager.removeAttributes('data-caption');
          this.attributeManager.removeClasses('materialboxed');
        };

        return MdBox;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'caption', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdBox', MdBox);
    }
  };
});