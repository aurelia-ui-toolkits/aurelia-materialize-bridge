System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export) {
  'use strict';

  var bindable, customAttribute, bindingMode, inject, getLogger, MdDatePicker;

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
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      MdDatePicker = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdDatePicker, [{
          key: 'container',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }, {
          key: 'translation',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdDatePicker(element) {
          _classCallCheck(this, _MdDatePicker);

          _defineDecoratedPropertyDescriptor(this, 'container', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'translation', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this.element = element;
          this.log = getLogger('md-datepicker');
        }

        MdDatePicker.prototype.attached = function attached() {
          var _this = this;

          this.element.classList.add('date-picker');
          var options = {
            selectMonths: true,
            selectYears: 15,
            onClose: function onClose() {
              $(document.activeElement).blur();
            }
          };
          var i18n = {};

          Object.assign(options, i18n);
          if (this.container) {
            options.container = this.container;
          }
          this.picker = $(this.element).pickadate(options).pickadate('picker');
          this.picker.on({
            'close': this.onClose.bind(this),
            'set': this.onSet.bind(this)
          });
          $(this.element).on('focusin', function () {
            $(_this.element).pickadate('open');
          });
        };

        MdDatePicker.prototype.detached = function detached() {
          if (this.picker) {
            this.picker.stop();
          }
        };

        MdDatePicker.prototype.onClose = function onClose() {
          var selected = this.picker.get('select');
          this.value = selected ? selected.obj : null;
        };

        MdDatePicker.prototype.onSet = function onSet(value) {};

        MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
          this.log.debug('selectedChanged', this.selected);
        };

        var _MdDatePicker = MdDatePicker;
        MdDatePicker = customAttribute('md-datepicker')(MdDatePicker) || MdDatePicker;
        MdDatePicker = inject(Element)(MdDatePicker) || MdDatePicker;
        return MdDatePicker;
      })();

      _export('MdDatePicker', MdDatePicker);
    }
  };
});