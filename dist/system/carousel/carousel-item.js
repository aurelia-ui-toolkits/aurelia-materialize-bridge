'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, MdCarouselItem;

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
    }],
    execute: function () {
      _export('MdCarouselItem', MdCarouselItem = (_dec = customElement('md-carousel-item'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneWay
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdCarouselItem(element) {
          _classCallCheck(this, MdCarouselItem);

          _initDefineProp(this, 'mdHref', _descriptor, this);

          _initDefineProp(this, 'mdImage', _descriptor2, this);

          this.element = element;
        }

        MdCarouselItem.prototype.attached = function attached() {};

        return MdCarouselItem;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdHref', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdImage', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _export('MdCarouselItem', MdCarouselItem);
    }
  };
});