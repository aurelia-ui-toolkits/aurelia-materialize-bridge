System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, getBooleanFromAttributeValue, MdSwitch;

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
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdSwitch = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSwitch, [{
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
          key: 'mdLabelOff',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'Off';
          },
          enumerable: true
        }, {
          key: 'mdLabelOn',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'On';
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdSwitch(element) {
          _classCallCheck(this, _MdSwitch);

          _defineDecoratedPropertyDescriptor(this, 'mdChecked', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdDisabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdLabelOff', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdLabelOn', _instanceInitializers);

          this.element = element;
          this.handleChange = this.handleChange.bind(this);
        }

        MdSwitch.prototype.attached = function attached() {
          this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
          if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
          }
          this.checkbox.addEventListener('change', this.handleChange);
        };

        MdSwitch.prototype.detached = function detached() {
          this.checkbox.removeEventListener('change', this.handleChange);
        };

        MdSwitch.prototype.handleChange = function handleChange() {
          this.mdChecked = this.checkbox.checked;
        };

        MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
          if (this.checkbox) {
            this.checkbox.checked = !!newValue;
          }
        };

        var _MdSwitch = MdSwitch;
        MdSwitch = inject(Element)(MdSwitch) || MdSwitch;
        MdSwitch = customElement('md-switch')(MdSwitch) || MdSwitch;
        return MdSwitch;
      })();

      _export('MdSwitch', MdSwitch);
    }
  };
});
//# sourceMappingURL=../dist/dev/switch/switch.js.map
