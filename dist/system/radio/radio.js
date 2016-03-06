System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, MdRadio;

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
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdRadio = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdRadio, [{
          key: 'mdChecked',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: null,
          enumerable: true
        }, {
          key: 'mdDisabled',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdGap',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdModel',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }, {
          key: 'mdName',
          decorators: [bindable()],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'mdValue',
          decorators: [bindable()],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }], [{
          key: 'id',
          value: 0,
          enumerable: true
        }], _instanceInitializers);

        function MdRadio(element) {
          _classCallCheck(this, _MdRadio);

          _defineDecoratedPropertyDescriptor(this, 'mdChecked', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdDisabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdGap', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdModel', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdName', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdValue', _instanceInitializers);

          this.element = element;
          this.controlId = 'md-radio-' + MdRadio.id++;
        }

        MdRadio.prototype.attached = function attached() {
          this.attributeManager = new AttributeManager(this.radio);
          if (getBooleanFromAttributeValue(this.mdGap)) {
            this.attributeManager.addClasses('with-gap');
          }
          if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.radio.disabled = true;
          }
          this.radio.checked = getBooleanFromAttributeValue(this.mdChecked);
        };

        MdRadio.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['with-gap', 'disabled']);
        };

        MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
          if (this.radio) {
            this.radio.disabled = !!newValue;
          }
        };

        var _MdRadio = MdRadio;
        MdRadio = inject(Element)(MdRadio) || MdRadio;
        MdRadio = customElement('md-radio')(MdRadio) || MdRadio;
        return MdRadio;
      })();

      _export('MdRadio', MdRadio);
    }
  };
});