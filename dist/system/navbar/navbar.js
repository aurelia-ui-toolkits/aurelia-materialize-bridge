'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, getBooleanFromAttributeValue, AttributeManager, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, MdNavbar;

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
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      _export('MdNavbar', MdNavbar = (_dec = customElement('md-navbar'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdNavbar(element) {
          _classCallCheck(this, MdNavbar);

          _initDefineProp(this, 'mdFixed', _descriptor, this);

          _initDefineProp(this, 'mdAutoHeight', _descriptor2, this);

          this.element = element;
        }

        MdNavbar.prototype.attached = function attached() {
          this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
          this.navAttributeManager = new AttributeManager(this.nav);
          if (getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.addClasses('navbar-fixed');
          }
          if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.addClasses('md-auto-height');
          }
        };

        MdNavbar.prototype.detached = function detached() {
          if (getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.removeClasses('navbar-fixed');
          }
          if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.addClasses('md-auto-height');
          }
        };

        return MdNavbar;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFixed', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdAutoHeight', [_dec4], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdNavbar', MdNavbar);
    }
  };
});