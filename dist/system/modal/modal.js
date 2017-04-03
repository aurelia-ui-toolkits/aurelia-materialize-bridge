'use strict';

System.register(['aurelia-logging', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', '../common/events'], function (_export, _context) {
  "use strict";

  var getLogger, bindable, customAttribute, inject, getBooleanFromAttributeValue, AttributeManager, fireMaterializeEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, MdModal;

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
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaTemplating) {
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
      _export('MdModal', MdModal = (_dec = customAttribute('md-modal'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdModal(element) {
          _classCallCheck(this, MdModal);

          _initDefineProp(this, 'dismissible', _descriptor, this);

          _initDefineProp(this, 'opacity', _descriptor2, this);

          _initDefineProp(this, 'inDuration', _descriptor3, this);

          _initDefineProp(this, 'outDuration', _descriptor4, this);

          _initDefineProp(this, 'startingTop', _descriptor5, this);

          _initDefineProp(this, 'endingTop', _descriptor6, this);

          this.element = element;
          this.log = getLogger('md-modal');
          this.attributeManager = new AttributeManager(this.element);
          this.onComplete = this.onComplete.bind(this);
          this.onReady = this.onReady.bind(this);
        }

        MdModal.prototype.attached = function attached() {
          var options = {
            complete: this.onComplete,
            dismissible: getBooleanFromAttributeValue(this.dismissible),
            endingTop: this.endingTop,
            inDuration: parseInt(this.inDuration, 10),
            opacity: parseFloat(this.opacity),
            outDuration: parseInt(this.outDuration, 10),
            ready: this.onReady,
            startingTop: this.startingTop
          };
          this.log.debug('modal options: ', options);
          this.attributeManager.addClasses('modal');
          $(this.element).modal(options);
        };

        MdModal.prototype.detached = function detached() {
          this.attributeManager.removeClasses('modal');
        };

        MdModal.prototype.onComplete = function onComplete() {
          fireMaterializeEvent(this.element, 'modal-complete');
        };

        MdModal.prototype.onReady = function onReady(modal, trigger) {
          fireMaterializeEvent(this.element, 'modal-ready', { modal: modal, trigger: trigger });
        };

        MdModal.prototype.open = function open() {
          $(this.element).modal('open');
        };

        MdModal.prototype.close = function close() {
          $(this.element).modal('close');
        };

        return MdModal;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dismissible', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'opacity', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inDuration', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'outDuration', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'startingTop', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return '4%';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'endingTop', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return '10%';
        }
      })), _class2)) || _class) || _class));

      _export('MdModal', MdModal);
    }
  };
});