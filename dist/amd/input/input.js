define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes', './input-update-service'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _commonAttributes, _inputUpdateService) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdInput = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdInput, [{
      key: 'mdLabel',
      decorators: [_aureliaTemplating.bindable()],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'mdPlaceholder',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'mdTextArea',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'mdType',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return 'text';
      },
      enumerable: true
    }, {
      key: 'mdValidate',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.oneTime
      })],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'mdValidateError',
      decorators: [_aureliaTemplating.bindable()],
      initializer: null,
      enumerable: true
    }, {
      key: 'mdValue',
      decorators: [_aureliaTemplating.bindable({
        defaultBindingMode: _aureliaBinding.bindingMode.twoWay
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
      this.mdTextArea = _commonAttributes.getBooleanFromAttributeValue(this.mdTextArea);
      if (_commonAttributes.getBooleanFromAttributeValue(this.mdValidate)) {
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
    MdInput = _aureliaDependencyInjection.inject(Element, _aureliaTaskQueue.TaskQueue, _inputUpdateService.MdInputUpdateService)(MdInput) || MdInput;
    MdInput = _aureliaTemplating.customElement('md-input')(MdInput) || MdInput;
    return MdInput;
  })();

  exports.MdInput = MdInput;
});