define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaLogging, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdDatePicker = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  var MdDatePicker = exports.MdDatePicker = (_dec = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec2 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec6 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec7 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec8 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdDatePicker(element, taskQueue) {
      _classCallCheck(this, MdDatePicker);

      _initDefineProp(this, 'container', _descriptor, this);

      _initDefineProp(this, 'translation', _descriptor2, this);

      _initDefineProp(this, 'value', _descriptor3, this);

      _initDefineProp(this, 'selectMonths', _descriptor4, this);

      _initDefineProp(this, 'selectYears', _descriptor5, this);

      _initDefineProp(this, 'options', _descriptor6, this);

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
      this.taskQueue = taskQueue;
    }

    MdDatePicker.prototype.bind = function bind() {
      var _this = this;

      this.selectMonths = (0, _attributes.getBooleanFromAttributeValue)(this.selectMonths);
      this.selectYears = parseInt(this.selectYears, 10);
      this.element.classList.add('date-picker');

      var options = {
        selectMonths: this.selectMonths,
        selectYears: this.selectYears,
        onClose: function onClose() {
          $(document.activeElement).blur();
        }
      };
      var i18n = {};

      Object.assign(options, i18n);

      if (this.options) {
        Object.assign(options, this.options);

        if (this.options.onClose) {
          options.onClose = function () {
            this.options.onClose();
            $(document.activeElement).blur();
          };
        }
      }
      if (this.container) {
        options.container = this.container;
      }
      this.picker = $(this.element).pickadate(options).pickadate('picker');
      this.picker.on({
        'close': this.onClose.bind(this),
        'set': this.onSet.bind(this)
      });

      if (this.value) {
        this.picker.set('select', this.value);
      }
      if (this.options && this.options.editable) {
        $(this.element).on('keypress', function (e) {
          if (e.keyCode === 13) {
            var rawDate = $(_this.element).val();
            if (rawDate) {
              rawDate = rawDate.split('/').join('-');
              var parsedDate = new Date(rawDate);
              _this.picker.set('select', parsedDate);
            } else {
              _this.openDatePicker();
            }
          }
        });
      } else {
        $(this.element).on('focusin', function () {
          _this.openDatePicker();
        });
      }

      if (this.options.showIcon) {
        this.element.classList.add('left');
        var calendarIcon = document.createElement('i');
        calendarIcon.classList.add('right');
        calendarIcon.classList.add('material-icons');
        calendarIcon.textContent = 'today';
        this.element.parentNode.insertBefore(calendarIcon, this.element.nextSibling);
        $(calendarIcon).on('click', this.onCalendarIconClick.bind(this));
      }
    };

    MdDatePicker.prototype.detached = function detached() {
      if (this.picker) {
        this.picker.stop();
      }
    };

    MdDatePicker.prototype.openDatePicker = function openDatePicker() {
      $(this.element).pickadate('open');
    };

    MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
      $(this.element).pickadate('close');
    };

    MdDatePicker.prototype.onClose = function onClose() {
      var selected = this.picker.get('select');
      this.value = selected ? selected.obj : null;
    };

    MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
      event.stopPropagation();
      this.openDatePicker();
    };

    MdDatePicker.prototype.onSet = function onSet(value) {
      if (this.options && this.options.closeOnSelect && value.select) {
        this.picker.close();
      }
    };

    MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
      this.log.debug('selectedChanged', this.value);

      this.picker.set('select', this.value);
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
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'selectMonths', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selectYears', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return 15;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  })), _class2)) || _class) || _class);
});