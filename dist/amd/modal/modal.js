define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdModal = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdModal = exports.MdModal = (_dec = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdModal(element) {
      _classCallCheck(this, MdModal);

      _initDefineProp(this, 'dismissible', _descriptor, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
      this.onComplete = this.onComplete.bind(this);
      this.onReady = this.onReady.bind(this);
    }

    MdModal.prototype.attached = function attached() {
      this.attributeManager.addClasses('modal');
      $(this.element).modal({
        complete: this.onComplete,
        dismissible: (0, _attributes.getBooleanFromAttributeValue)(this.dismissible),
        ready: this.onReady
      });
    };

    MdModal.prototype.detached = function detached() {
      this.attributeManager.removeClasses('modal');
    };

    MdModal.prototype.onComplete = function onComplete() {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-complete');
    };

    MdModal.prototype.onReady = function onReady(modal, trigger) {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-ready', { modal: modal, trigger: trigger });
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
  })), _class2)) || _class) || _class);
});