'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var bindable, customElement, bindingMode, inject, getBooleanFromAttributeValue, getLogger, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdSlider;

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
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdSlider', MdSlider = (_dec = customElement('md-slider'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec4 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec5 = bindable(), _dec6 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec7 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdSlider(element) {
          _classCallCheck(this, MdSlider);

          _initDefineProp(this, 'mdFillContainer', _descriptor, this);

          _initDefineProp(this, 'mdHeight', _descriptor2, this);

          _initDefineProp(this, 'mdIndicators', _descriptor3, this);

          _initDefineProp(this, 'mdInterval', _descriptor4, this);

          _initDefineProp(this, 'mdTransition', _descriptor5, this);

          this.element = element;
          this.log = getLogger('md-slider');
        }

        MdSlider.prototype.attached = function attached() {
          if (getBooleanFromAttributeValue(this.mdFillContainer)) {
            this.element.classList.add('fullscreen');
          }
          this.refresh();
        };

        MdSlider.prototype.pause = function pause() {
          $(this.element).slider('pause');
        };

        MdSlider.prototype.start = function start() {
          $(this.element).slider('start');
        };

        MdSlider.prototype.next = function next() {
          $(this.element).slider('next');
        };

        MdSlider.prototype.prev = function prev() {
          $(this.element).slider('prev');
        };

        MdSlider.prototype.refresh = function refresh() {
          var options = {
            height: parseInt(this.mdHeight, 10),
            indicators: getBooleanFromAttributeValue(this.mdIndicators),
            interval: parseInt(this.mdInterval, 10),
            transition: parseInt(this.mdTransition, 10)
          };
          this.log.debug('refreshing slider, params:', options);
          $(this.element).slider(options);
        };

        MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
          this.refresh();
        };

        return MdSlider;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFillContainer', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdHeight', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 400;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdIndicators', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdInterval', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 6000;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTransition', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 500;
        }
      })), _class2)) || _class) || _class));

      _export('MdSlider', MdSlider);
    }
  };
});
//# sourceMappingURL=../dist/dev/slider/slider.js.map
