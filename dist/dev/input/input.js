System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes', './input-update-service'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, TaskQueue, getBooleanFromAttributeValue, MdInputUpdateService, MdInput;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
      MdInput = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdInput, [{
          key: 'mdLabel',
          decorators: [bindable()],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'mdPlaceholder',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'mdTextArea',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdType',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 'text';
          },
          enumerable: true
        }, {
          key: 'mdValidate',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdValidateError',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }, {
          key: 'mdValue',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }], [{
          key: 'id',
          value: 0,
          enumerable: true
        }], _instanceInitializers);

        function MdInput(element, taskQueue, updateService) {
          _classCallCheck(this, _MdInput);

          _defineDecoratedPropertyDescriptor(this, 'mdLabel', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdPlaceholder', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdTextArea', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdType', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdValidate', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdValidateError', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdValue', _instanceInitializers);

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

        var _MdInput = MdInput;
        MdInput = inject(Element, TaskQueue, MdInputUpdateService)(MdInput) || MdInput;
        MdInput = customElement('md-input')(MdInput) || MdInput;
        return MdInput;
      })();

      _export('MdInput', MdInput);
    }
  };
});
//# sourceMappingURL=../dist/dev/input/input.js.map
