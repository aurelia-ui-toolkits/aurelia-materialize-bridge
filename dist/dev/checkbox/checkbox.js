System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, MdCheckbox;

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
      MdCheckbox = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdCheckbox, [{
          key: 'mdChecked',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: null,
          enumerable: true
        }, {
          key: 'mdDisabled',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }, {
          key: 'mdFilledIn',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }], [{
          key: 'id',
          value: 0,
          enumerable: true
        }], _instanceInitializers);

        function MdCheckbox(element) {
          _classCallCheck(this, _MdCheckbox);

          _defineDecoratedPropertyDescriptor(this, 'mdChecked', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdDisabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdFilledIn', _instanceInitializers);

          this.element = element;
          this.controlId = 'md-checkbox-' + MdCheckbox.id++;
          this.handleChange = this.handleChange.bind(this);
        }

        MdCheckbox.prototype.attached = function attached() {
          this.attributeManager = new AttributeManager(this.checkbox);
          if (getBooleanFromAttributeValue(this.mdFilledIn)) {
            this.attributeManager.addClasses('filled-in');
          }
          if (this.mdChecked === null) {
            this.checkbox.indeterminate = true;
          } else {
            this.checkbox.indeterminate = false;
          }
          if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
          }
          this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
          this.checkbox.addEventListener('change', this.handleChange);
        };

        MdCheckbox.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['filled-in', 'disabled']);
          this.checkbox.removeEventListener('change', this.handleChange);
        };

        MdCheckbox.prototype.handleChange = function handleChange() {
          this.mdChecked = this.checkbox.checked;
        };

        MdCheckbox.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.checked = !!newValue;
          }
        };

        MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
          }
        };

        var _MdCheckbox = MdCheckbox;
        MdCheckbox = inject(Element)(MdCheckbox) || MdCheckbox;
        MdCheckbox = customElement('md-checkbox')(MdCheckbox) || MdCheckbox;
        return MdCheckbox;
      })();

      _export('MdCheckbox', MdCheckbox);
    }
  };
});
//# sourceMappingURL=../dist/dev/checkbox/checkbox.js.map
