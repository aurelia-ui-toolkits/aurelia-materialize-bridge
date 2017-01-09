'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging', '../common/events', '../common/attributes', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, BindingEngine, inject, TaskQueue, LogManager, fireEvent, getBooleanFromAttributeValue, DOM, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdSelect;

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
      BindingEngine = _aureliaBinding.BindingEngine;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('MdSelect', MdSelect = (_dec = inject(Element, LogManager, BindingEngine, TaskQueue), _dec2 = customAttribute('md-select'), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdSelect(element, logManager, bindingEngine, taskQueue) {
          _classCallCheck(this, MdSelect);

          _initDefineProp(this, 'disabled', _descriptor, this);

          _initDefineProp(this, 'label', _descriptor2, this);

          _initDefineProp(this, 'showErrortext', _descriptor3, this);

          this._suspendUpdate = false;
          this.subscriptions = [];
          this.input = null;
          this.dropdownMutationObserver = null;
          this._taskqueueRunning = false;

          this.element = element;
          this.taskQueue = taskQueue;
          this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
          this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
          this.handleBlur = this.handleBlur.bind(this);
          this.log = LogManager.getLogger('md-select');
          this.bindingEngine = bindingEngine;
        }

        MdSelect.prototype.attached = function attached() {
          var _this = this;

          this.taskQueue.queueTask(function () {
            _this.createMaterialSelect(false);

            if (_this.label) {
              var wrapper = $(_this.element).parent('.select-wrapper');
              var div = $('<div class="input-field"></div>');
              var va = _this.element.attributes.getNamedItem('validate');
              if (va) {
                div.attr(va.name, va.label);
              }
              wrapper.wrap(div);
              $('<label>' + _this.label + '</label>').insertAfter(wrapper);
            }
          });
          this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));


          $(this.element).on('change', this.handleChangeFromNativeSelect);
        };

        MdSelect.prototype.detached = function detached() {
          $(this.element).off('change', this.handleChangeFromNativeSelect);
          this.observeVisibleDropdownContent(false);
          this.dropdownMutationObserver = null;
          $(this.element).material_select('destroy');
          this.subscriptions.forEach(function (sub) {
            return sub.dispose();
          });
        };

        MdSelect.prototype.refresh = function refresh() {
          var _this2 = this;

          this.taskQueue.queueTask(function () {
            _this2.createMaterialSelect(true);
          });
        };

        MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
          this.toggleControl(newValue);
        };

        MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
          this.setErrorTextAttribute();
        };

        MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
          var input = this.element.parentElement.querySelector('input.select-dropdown');
          if (!input) return;
          this.log.debug('showErrortextChanged: ' + this.showErrortext);
          input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
        };

        MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
          this.log.debug('selectedOptions changed', arguments);
        };

        MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
          if (!this._suspendUpdate) {
            this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
            this._suspendUpdate = true;
            fireEvent(this.element, 'change');
            this._suspendUpdate = false;
          }
        };

        MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
          this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
          if (!this._suspendUpdate) {
            this.createMaterialSelect(false);
          }
        };

        MdSelect.prototype.toggleControl = function toggleControl(disable) {
          var $wrapper = $(this.element).parent('.select-wrapper');
          if ($wrapper.length > 0) {
            if (disable) {
              $('.caret', $wrapper).addClass('disabled');
              $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
              $wrapper.attr('disabled', 'disabled');
            } else {
              $('.caret', $wrapper).removeClass('disabled');
              $('input.select-dropdown', $wrapper).attr('disabled', null);
              $wrapper.attr('disabled', null);
              $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
            }
          }
        };

        MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
          this.observeVisibleDropdownContent(false);
          if (destroy) {
            $(this.element).material_select('destroy');
          }
          $(this.element).material_select();
          this.toggleControl(this.disabled);
          this.observeVisibleDropdownContent(true);
          this.setErrorTextAttribute();
        };

        MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
          var _this3 = this;

          if (attach) {
            if (!this.dropdownMutationObserver) {
              this.dropdownMutationObserver = DOM.createMutationObserver(function (mutations) {
                var isHidden = false;
                for (var _iterator = mutations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                  var _ref;

                  if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                  } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                  }

                  var mutation = _ref;

                  if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
                    isHidden = true;
                  }
                }
                if (isHidden) {
                  _this3.dropdownMutationObserver.takeRecords();
                  _this3.handleBlur();
                }
              });
            }
            this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
              attributes: true,
              attributeFilter: ['style']
            });
          } else {
            if (this.dropdownMutationObserver) {
              this.dropdownMutationObserver.disconnect();
              this.dropdownMutationObserver.takeRecords();
            }
          }
        };

        MdSelect.prototype.handleBlur = function handleBlur() {
          var _this4 = this;

          if (this._taskqueueRunning) return;
          this._taskqueueRunning = true;
          this.taskQueue.queueTask(function () {
            _this4.log.debug('fire blur event');
            fireEvent(_this4.element, 'blur');
            _this4._taskqueueRunning = false;
          });
        };

        return MdSelect;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showErrortext', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _export('MdSelect', MdSelect);
    }
  };
});
//# sourceMappingURL=../dist/dev/select/select.js.map
