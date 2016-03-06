System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, fireEvent, getBooleanFromAttributeValue, MdFileInput;

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
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdFileInput = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdFileInput, [{
          key: 'mdCaption',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'File';
          },
          enumerable: true
        }, {
          key: 'mdMultiple',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdValue',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdFileInput(element) {
          _classCallCheck(this, _MdFileInput);

          _defineDecoratedPropertyDescriptor(this, 'mdCaption', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdMultiple', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdValue', _instanceInitializers);

          this._suspendUpdate = false;

          this.element = element;
          this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
        }

        MdFileInput.prototype.attached = function attached() {
          this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
          $(this.filePath).on('change', this.handleChangeFromNativeInput);
        };

        MdFileInput.prototype.detached = function detached() {
          $(this.element).off('change', this.handleChangeFromNativeInput);
        };

        MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
          if (!this._suspendUpdate) {
            this._suspendUpdate = true;
            fireEvent(this.filePath, 'change');
            this._suspendUpdate = false;
          }
        };

        var _MdFileInput = MdFileInput;
        MdFileInput = inject(Element)(MdFileInput) || MdFileInput;
        MdFileInput = customElement('md-file')(MdFileInput) || MdFileInput;
        return MdFileInput;
      })();

      _export('MdFileInput', MdFileInput);
    }
  };
});