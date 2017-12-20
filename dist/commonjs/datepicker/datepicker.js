'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdDatePicker = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaLogging = require('aurelia-logging');

var _attributes = require('../common/attributes');

var _datepickerDefaultParser = require('./datepicker-default-parser');

var _events = require('../common/events');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var MdDatePicker = exports.MdDatePicker = (_dec = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, _datepickerDefaultParser.DatePickerDefaultParser), _dec2 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec6 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec7 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec8 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec9 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec10 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function MdDatePicker(element, taskQueue, defaultParser) {
    _classCallCheck(this, MdDatePicker);

    _initDefineProp(this, 'container', _descriptor, this);

    _initDefineProp(this, 'translation', _descriptor2, this);

    _initDefineProp(this, 'value', _descriptor3, this);

    _initDefineProp(this, 'parsers', _descriptor4, this);

    _initDefineProp(this, 'selectMonths', _descriptor5, this);

    _initDefineProp(this, 'selectYears', _descriptor6, this);

    _initDefineProp(this, 'options', _descriptor7, this);

    _initDefineProp(this, 'showErrortext', _descriptor8, this);

    this.calendarIcon = null;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
    this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
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
          _this.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (_this.parseDate($(_this.element).val())) {
            _this.updateValue();
            _this.closeDatePicker();
          } else {
            _this.openDatePicker();
          }
        } else {
          _this.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', function () {
        _this.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      this.calendarIcon = document.createElement('i');
      this.calendarIcon.classList.add('right');
      this.calendarIcon.classList.add('material-icons');
      this.calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
      $(this.calendarIcon).on('click', this.onCalendarIconClick);

      options.iconClass = options.iconClass || 'std-icon-fixup';
      this.calendarIcon.classList.add(options.iconClass);
    }

    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.parseDate = function parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (var _iterator = this.parsers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var parser = _ref;

        if (parser.canParse(value)) {
          var parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.options.showIcon) {
      this.element.classList.remove('left');
      $(this.calendarIcon).off('click', this.onCalendarIconClick);
      $(this.calendarIcon).remove();
      this.calendarIcon = null;
    }
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

  MdDatePicker.prototype.updateValue = function updateValue() {
    var selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  };

  MdDatePicker.prototype.onClose = function onClose() {
    this.updateValue();
    (0, _events.fireEvent)(this.element, 'blur');
  };

  MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  };

  MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);

    this.picker.set('select', this.value);
  };

  MdDatePicker.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', (0, _attributes.getBooleanFromAttributeValue)(this.showErrortext));
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
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'parsers', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selectMonths', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'selectYears', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showErrortext', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class2)) || _class) || _class);