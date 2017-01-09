'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdProgress;

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
      _export('MdProgress', MdProgress = (_dec = customElement('md-progress'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec5 = bindable(), _dec6 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec7 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdProgress(element) {
          _classCallCheck(this, MdProgress);

          _initDefineProp(this, 'mdColor', _descriptor, this);

          _initDefineProp(this, 'mdPixelSize', _descriptor2, this);

          _initDefineProp(this, 'mdSize', _descriptor3, this);

          _initDefineProp(this, 'mdType', _descriptor4, this);

          _initDefineProp(this, 'mdValue', _descriptor5, this);

          this.element = element;
        }

        MdProgress.prototype.bind = function bind() {};

        MdProgress.prototype.attached = function attached() {
          this.mdPixelSizeChanged(this.mdPixelSize);
        };

        MdProgress.prototype.mdSizeChanged = function mdSizeChanged(newValue) {
          this.mdPixelSize = null;
        };

        MdProgress.prototype.mdPixelSizeChanged = function mdPixelSizeChanged(newValue) {
          if (this.wrapper) {
            newValue = newValue === null || newValue === '' || isNaN(newValue) ? '' : newValue + 'px';
            this.wrapper.style.height = newValue;
            this.wrapper.style.width = newValue;
          }
        };

        return MdProgress;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdColor', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdPixelSize', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdSize', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 'big';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdType', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'linear';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('MdProgress', MdProgress);
    }
  };
});
//# sourceMappingURL=../dist/dev/progress/progress.js.map
