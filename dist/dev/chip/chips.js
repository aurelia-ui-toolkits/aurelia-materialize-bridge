'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging', '../common/events'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, bindingMode, inject, getLogger, fireEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, MdChips;

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
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }],
    execute: function () {
      _export('MdChips', MdChips = (_dec = customAttribute('md-chips'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdChips(element) {
          _classCallCheck(this, MdChips);

          _initDefineProp(this, 'autocompleteData', _descriptor, this);

          _initDefineProp(this, 'data', _descriptor2, this);

          _initDefineProp(this, 'placeholder', _descriptor3, this);

          _initDefineProp(this, 'secondaryPlaceholder', _descriptor4, this);

          this.element = element;
          this.log = getLogger('md-chips');

          this.onChipAdd = this.onChipAdd.bind(this);
          this.onChipDelete = this.onChipDelete.bind(this);
          this.onChipSelect = this.onChipSelect.bind(this);
        }

        MdChips.prototype.attached = function attached() {
          var options = {
            autocompleteData: this.autocompleteData,
            data: this.data,
            placeholder: this.placeholder,
            secondaryPlaceholder: this.secondaryPlaceholder
          };
          $(this.element).material_chip(options);
          $(this.element).on('chip.add', this.onChipAdd);
          $(this.element).on('chip.delete', this.onChipDelete);
          $(this.element).on('chip.select', this.onChipSelect);
        };

        MdChips.prototype.detached = function detached() {};

        MdChips.prototype.onChipAdd = function onChipAdd(e, chip) {
          this.data = $(this.element).material_chip('data');
          fireEvent(this.element, 'change', { operation: 'add', target: chip, data: this.data });
        };

        MdChips.prototype.onChipDelete = function onChipDelete(e, chip) {
          this.data = $(this.element).material_chip('data');
          fireEvent(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
        };

        MdChips.prototype.onChipSelect = function onChipSelect(e, chip) {
          fireEvent(this.element, 'selected', { target: chip });
        };

        return MdChips;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'autocompleteData', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return {};
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'secondaryPlaceholder', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _export('MdChips', MdChips);
    }
  };
});
//# sourceMappingURL=../dist/dev/chip/chips.js.map
