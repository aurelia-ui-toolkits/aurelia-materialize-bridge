'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdSidenavCollapse = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributes = require('../common/attributes');

var _aureliaLogging = require('aurelia-logging');

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

var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor, this);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this = this;

    this.ref.whenAttached.then(function () {

      var closeOnClick = _this.ref.mdFixed && window.innerWidth > 992 ? false : (0, _attributes.getBooleanFromAttributeValue)(_this.ref.mdCloseOnClick);

      _this.element.setAttribute('data-activates', _this.ref.controlId);
      var sideNavConfig = {
        edge: _this.ref.mdEdge || 'left',

        closeOnClick: closeOnClick,
        menuWidth: parseInt(_this.ref.mdWidth, 10)
      };

      $(_this.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  MdSidenavCollapse.prototype.show = function show() {
    $(this.element).sideNav('show');
  };

  MdSidenavCollapse.prototype.hide = function hide() {
    $(this.element).sideNav('hide');
  };

  return MdSidenavCollapse;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);