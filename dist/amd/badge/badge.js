define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdBadge = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdBadge = exports.MdBadge = (_dec = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdBadge(element) {
      _classCallCheck(this, MdBadge);

      _initDefineProp(this, 'isNew', _descriptor, this);

      _initDefineProp(this, 'caption', _descriptor2, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdBadge.prototype.attached = function attached() {
      var classes = ['badge'];

      if ((0, _attributes.getBooleanFromAttributeValue)(this.isNew)) {
        classes.push('new');
      }

      if (this.caption !== null) {
        this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
      }

      this.attributeManager.addClasses(classes);
    };

    MdBadge.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['badge', 'new']);
      this.attributeManager.removeAttributes(['data-badge-caption']);
    };

    MdBadge.prototype.newChanged = function newChanged(newValue) {
      if ((0, _attributes.getBooleanFromAttributeValue)(newValue)) {
        this.attributeManager.addClasses('new');
      } else {
        this.attributeManager.removeClasses('new');
      }
    };

    MdBadge.prototype.captionChanged = function captionChanged(newValue) {
      if (newValue !== null) {
        this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
      } else {
        this.attributeManager.removeAttributes(['data-badge-caption']);
      }
    };

    return MdBadge;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'isNew', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'caption', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});