System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-binding', '../common/events', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inject, observable, fireMaterializeEvent, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, MdlListSelector;

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
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      observable = _aureliaBinding.observable;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdlListSelector', MdlListSelector = (_dec = customElement('md-collection-selector'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = observable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdlListSelector(element) {
          _classCallCheck(this, MdlListSelector);

          _initDefineProp(this, 'item', _descriptor, this);

          _initDefineProp(this, 'mdDisabled', _descriptor2, this);

          _initDefineProp(this, 'isSelected', _descriptor3, this);

          this.element = element;
        }

        MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
          fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
        };

        MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
          this.mdDisabled = getBooleanFromAttributeValue(newValue);
        };

        return MdlListSelector;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'isSelected', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('MdlListSelector', MdlListSelector);
    }
  };
});