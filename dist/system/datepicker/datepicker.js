'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export, _context) {
  var bindable, customAttribute, bindingMode, inject, getLogger, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdDatePicker;

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
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdDatePicker', MdDatePicker = (_dec = inject(Element), _dec2 = customAttribute('md-datepicker'), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdDatePicker(element) {
          _classCallCheck(this, MdDatePicker);

          _initDefineProp(this, 'container', _descriptor, this);

          _initDefineProp(this, 'translation', _descriptor2, this);

          _initDefineProp(this, 'value', _descriptor3, this);

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

        return MdDatePicker;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'container', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'translation', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdDatePicker', MdDatePicker);
    }
  };
});