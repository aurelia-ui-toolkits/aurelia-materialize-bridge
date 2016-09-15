'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', '../common/events'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, getBooleanFromAttributeValue, AttributeManager, fireMaterializeEvent, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdModalTrigger;

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
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }],
    execute: function () {
      _export('MdModalTrigger', MdModalTrigger = (_dec = customAttribute('md-modal-trigger'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdModalTrigger(element) {
          _classCallCheck(this, MdModalTrigger);

          _initDefineProp(this, 'dismissible', _descriptor, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
          this.onComplete = this.onComplete.bind(this);
        }

        MdModalTrigger.prototype.attached = function attached() {
          this.attributeManager.addClasses('modal-trigger');
          $(this.element).leanModal({
            complete: this.onComplete,
            dismissible: getBooleanFromAttributeValue(this.dismissible)
          });
        };

        MdModalTrigger.prototype.detached = function detached() {
          this.attributeManager.removeClasses('modal-trigger');
        };

        MdModalTrigger.prototype.onComplete = function onComplete() {
          fireMaterializeEvent(this.element, 'modal-complete');
        };

        return MdModalTrigger;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dismissible', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _export('MdModalTrigger', MdModalTrigger);
    }
  };
});