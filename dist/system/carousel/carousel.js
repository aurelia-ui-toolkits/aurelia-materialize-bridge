'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, children, customElement, bindingMode, inject, TaskQueue, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdCarousel;

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
      children = _aureliaTemplating.children;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdCarousel', MdCarousel = (_dec = customElement('md-carousel'), _dec2 = inject(Element, TaskQueue), _dec3 = bindable(), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec5 = children('md-carousel-item'), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdCarousel(element, taskQueue) {
          _classCallCheck(this, MdCarousel);

          _initDefineProp(this, 'mdIndicators', _descriptor, this);

          _initDefineProp(this, 'mdSlider', _descriptor2, this);

          _initDefineProp(this, 'items', _descriptor3, this);

          this.element = element;
          this.taskQueue = taskQueue;
        }

        MdCarousel.prototype.attached = function attached() {
          if (getBooleanFromAttributeValue(this.mdSlider)) {
            this.element.classList.add('carousel-slider');
          }

          this.refresh();
        };

        MdCarousel.prototype.itemsChanged = function itemsChanged(newValue) {
          this.refresh();
        };

        MdCarousel.prototype.refresh = function refresh() {
          var _this = this;

          if (this.items.length > 0) {
            (function () {
              var options = {
                full_width: getBooleanFromAttributeValue(_this.mdSlider),
                fullWidth: getBooleanFromAttributeValue(_this.mdSlider),
                indicators: _this.mdIndicators
              };

              _this.taskQueue.queueTask(function () {
                $(_this.element).carousel(options);
              });
            })();
          }
        };

        return MdCarousel;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdIndicators', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdSlider', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'items', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));

      _export('MdCarousel', MdCarousel);
    }
  };
});