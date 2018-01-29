define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging', '../common/events', '../common/attributes', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaLogging, _events, _attributes, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSelect = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdSelect = exports.MdSelect = (_dec = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec2 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    MdSelect.prototype.readonlyChanged = function readonlyChanged() {
      if (this.readonly) {
        this.makeReadonly($(this.element).siblings('input')[0]);
      } else {
        this.refresh();
      }
    };

    function MdSelect(element, bindingEngine, taskQueue) {
      var _this = this;

      _classCallCheck(this, MdSelect);

      _initDefineProp(this, 'disabled', _descriptor, this);

      _initDefineProp(this, 'readonly', _descriptor2, this);

      _initDefineProp(this, 'enableOptionObserver', _descriptor3, this);

      _initDefineProp(this, 'label', _descriptor4, this);

      _initDefineProp(this, 'showErrortext', _descriptor5, this);

      this._suspendUpdate = false;
      this.subscriptions = [];
      this.inputField = null;
      this.input = null;
      this.dropdownMutationObserver = null;
      this.optionsMutationObserver = null;
      this._taskqueueRunning = false;

      this.mdUnrenderValidateResults = function (results, renderer) {
        for (var _iterator = results, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var result = _ref;

          if (!result.valid) {
            renderer.removeMessage(_this.inputField, result);
          }
        }
        renderer.removeValidationClasses(_this.input);
      };

      this.mdRenderValidateResults = function (results, renderer) {
        for (var _iterator2 = results, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var result = _ref2;

          if (!result.valid) {
            result.target = _this.input;
            if (!(_this.input.hasAttribute('data-show-errortext') && _this.input.getAttribute('data-show-errortext') === 'false')) {
              renderer.addMessage(_this.inputField, result);
            }
          }
        }
        renderer.addValidationClasses(_this.input, !results.find(function (x) {
          return !x.valid;
        }));
      };

      this.element = element;
      this.taskQueue = taskQueue;
      this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
      this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.log = (0, _aureliaLogging.getLogger)('md-select');
      this.bindingEngine = bindingEngine;

      this.handleFocus = this.handleFocus.bind(this);
    }

    MdSelect.prototype.attached = function attached() {
      var _this2 = this;

      if (this.element.classList.contains('browser-default')) {
        return;
      }
      var div = $('<div class="input-field"></div>');
      var va = this.element.attributes.getNamedItem('validate');
      if (va) {
        div.attr(va.name, va.label);
      }

      $(this.element).wrap(div);
      if (this.label) {
        $('<label class="md-select-label">' + this.label + '</label>').insertAfter(this.element);
      }

      this.taskQueue.queueTask(function () {
        _this2.createMaterialSelect(false);
      });
      this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

      this.inputField = this.element.closest('.input-field');
      $(this.element).on('change', this.handleChangeFromNativeSelect);
      this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
      this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    };

    MdSelect.prototype.detached = function detached() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      var $element = $(this.element);
      $element.off('change', this.handleChangeFromNativeSelect);
      this.observeVisibleDropdownContent(false);
      this.observeOptions(false);
      this.dropdownMutationObserver = null;
      $element.siblings('ul#select-options-' + $element.data('select-id')).remove();
      $element.material_select('destroy');
      $element.siblings('label').remove();
      $element.siblings('.md-input-validation').remove();
      $element.unwrap();
      this.subscriptions.forEach(function (sub) {
        return sub.dispose();
      });
      this.element.mdUnrenderValidateResults = undefined;
      this.element.mdRenderValidateResults = undefined;
    };

    MdSelect.prototype.refresh = function refresh() {
      var _this3 = this;

      if (this.element.classList.contains('browser-default')) {
        return;
      }
      this.taskQueue.queueTask(function () {
        _this3.createMaterialSelect(true);
      });
    };

    MdSelect.prototype.labelChanged = function labelChanged(newValue) {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      this.updateLabel();
    };

    MdSelect.prototype.updateLabel = function updateLabel() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if (this.label) {
        var $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
        $label.text(this.label);
      }
    };

    MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
      this.toggleControl(newValue);
    };

    MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
      this.setErrorTextAttribute();
    };

    MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      var input = this.element.parentElement.querySelector('input.select-dropdown');
      if (!input) return;
      this.log.debug('showErrortextChanged: ' + this.showErrortext);
      input.setAttribute('data-show-errortext', (0, _attributes.getBooleanFromAttributeValue)(this.showErrortext));
    };

    MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      this.log.debug('selectedOptions changed', arguments);
    };

    MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if (!this._suspendUpdate) {
        this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
        this._suspendUpdate = true;
        (0, _events.fireEvent)(this.element, 'change');
        this._suspendUpdate = false;
      }
    };

    MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
      if (!this._suspendUpdate) {
        this.createMaterialSelect(false);
      }
    };

    MdSelect.prototype.toggleControl = function toggleControl(disable) {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
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
        }
      }
    };

    MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      this.observeVisibleDropdownContent(false);
      this.observeOptions(false);
      var input = $(this.element).siblings('input');
      var isValid = input.hasClass('valid');
      var isInvalid = input.hasClass('invalid');
      if (destroy) {
        $(this.element).material_select('destroy');
      }
      $(this.element).material_select();
      input = $(this.element).siblings('input');
      if (isValid) {
        input.addClass('valid');
      }
      if (isInvalid) {
        input.addClass('invalid');
      }
      this.input = input[0];
      this.toggleControl(this.disabled);
      this.observeVisibleDropdownContent(true);
      this.observeOptions(true);
      this.setErrorTextAttribute();
      if (this.readonly) {
        this.makeReadonly(input[0]);
      }
    };

    MdSelect.prototype.makeReadonly = function makeReadonly(input) {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      $(input).off('click');
      $(input).off('focus');
      $(input).off('keydown');
      $(input).off('open');
    };

    MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
      var _this4 = this;

      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if (attach) {
        if (!this.dropdownMutationObserver) {
          this.dropdownMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
            var isHidden = false;
            for (var _iterator3 = mutations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref3;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
              }

              var mutation = _ref3;

              if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
                isHidden = true;
              }
            }
            if (isHidden) {
              _this4.dropdownMutationObserver.takeRecords();
              _this4.handleBlur();
            } else {
              _this4.handleFocus();
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

    MdSelect.prototype.observeOptions = function observeOptions(attach) {
      var _this5 = this;

      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.enableOptionObserver)) {
        if (attach) {
          if (!this.optionsMutationObserver) {
            this.optionsMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
              _this5.refresh();
            });
          }
          this.optionsMutationObserver.observe(this.element, {
            characterData: true,
            subtree: true
          });
        } else {
          if (this.optionsMutationObserver) {
            this.optionsMutationObserver.disconnect();
            this.optionsMutationObserver.takeRecords();
          }
        }
      }
    };

    MdSelect.prototype.open = function open() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      $(this.element).siblings('input.select-dropdown').trigger('focus');
    };

    MdSelect.prototype.handleBlur = function handleBlur() {
      var _this6 = this;

      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if (this._taskqueueRunning) return;
      this._taskqueueRunning = true;
      this.taskQueue.queueTask(function () {
        _this6.log.debug('fire blur event');
        (0, _events.fireEvent)(_this6.element, 'blur');
        _this6._taskqueueRunning = false;

        if (_this6.label) {
          var $label = $(_this6.element).parent('.select-wrapper').siblings('.md-select-label');
          $label.removeClass('md-focused');
        }
      });
    };

    MdSelect.prototype.handleFocus = function handleFocus() {
      if (this.element.classList.contains('browser-default')) {
        return;
      }
      if (this.label) {
        var $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
        $label.addClass('md-focused');
      }
    };

    return MdSelect;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enableOptionObserver', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showErrortext', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});