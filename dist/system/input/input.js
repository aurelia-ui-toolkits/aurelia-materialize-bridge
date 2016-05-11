'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes', './input-update-service'], function (_export, _context) {
  var bindable, customElement, bindingMode, inject, TaskQueue, getBooleanFromAttributeValue, MdInputUpdateService, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp, MdInput;

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
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_inputUpdateService) {
      MdInputUpdateService = _inputUpdateService.MdInputUpdateService;
    }],
    execute: function () {
      _export('MdInput', MdInput = (_dec = customElement('md-input'), _dec2 = inject(Element, TaskQueue, MdInputUpdateService), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec7 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec9 = bindable(), _dec10 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdInput(element, taskQueue, updateService) {
          _classCallCheck(this, MdInput);

          _initDefineProp(this, 'mdLabel', _descriptor, this);

          _initDefineProp(this, 'mdDisabled', _descriptor2, this);

          _initDefineProp(this, 'mdPlaceholder', _descriptor3, this);

          _initDefineProp(this, 'mdTextArea', _descriptor4, this);

          _initDefineProp(this, 'mdType', _descriptor5, this);

          _initDefineProp(this, 'mdValidate', _descriptor6, this);

          _initDefineProp(this, 'mdValidateError', _descriptor7, this);

          _initDefineProp(this, 'mdValue', _descriptor8, this);

          this.element = element;
          this.taskQueue = taskQueue;
          this.controlId = 'md-input-' + MdInput.id++;
          this.updateService = updateService;
        }

        MdInput.prototype.attached = function attached() {
          this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
          if (getBooleanFromAttributeValue(this.mdValidate)) {
            this.input.classList.add('validate');
          }
          if (this.mdValidateError) {
            this.label.setAttribute('data-error', this.mdValidateError);
          }
          if (this.mdPlaceholder) {
            this.input.setAttribute('placeholder', this.mdPlaceholder);
            this.update();
          }
        };

        MdInput.prototype.mdValueChanged = function mdValueChanged() {
          this.updateService.update();
          if (this.mdTextArea) {
            $(this.input).trigger('autoresize');
          }
        };

        return MdInput;
      }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdLabel', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdPlaceholder', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdTextArea', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdType', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 'text';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidate', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidateError', [_dec9], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _export('MdInput', MdInput);
    }
  };
});