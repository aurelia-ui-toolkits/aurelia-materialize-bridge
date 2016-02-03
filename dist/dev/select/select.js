System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export) {
  'use strict';

  var bindable, customAttribute, bindingMode, inject, LogManager, MdSelect;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      MdSelect = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSelect, [{
          key: 'selected',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdSelect(element, logManager) {
          _classCallCheck(this, _MdSelect);

          _defineDecoratedPropertyDescriptor(this, 'selected', _instanceInitializers);

          this.element = element;
          this.changeHandler = this.handleChangeFromNativeSelect.bind(this);
          this.log = LogManager.getLogger('md-select');
        }

        MdSelect.prototype.attached = function attached() {
          $(this.element).material_select();
          $(this.element).on('change', this.changeHandler);
        };

        MdSelect.prototype.detached = function detached() {
          $(this.element).off('change', this.changeHandler);
          $(this.element).material_select('destroy');
        };

        MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
          this.selected = $(this.element).val();
        };

        MdSelect.prototype.arraysAreEqual = function arraysAreEqual(array1, array2) {
          var result = true;
          if (array1 && array2) {
            if (typeof array1 === 'string') {
              result = false;
            } else {
              result = array1.length === array2.length && array1.every(function (element, index) {
                return element === array2[index];
              });
            }
          } else {
            result = false;
          }

          return result;
        };

        MdSelect.prototype.selectedChanged = function selectedChanged() {
          if (!this.arraysAreEqual($(this.element).val(), this.selected)) {
            $(this.element).val(this.selected);
            $(this.element).material_select();
          }
        };

        var _MdSelect = MdSelect;
        MdSelect = customAttribute('md-select')(MdSelect) || MdSelect;
        MdSelect = inject(Element, LogManager)(MdSelect) || MdSelect;
        return MdSelect;
      })();

      _export('MdSelect', MdSelect);
    }
  };
});
//# sourceMappingURL=../dist/dev/select/select.js.map
