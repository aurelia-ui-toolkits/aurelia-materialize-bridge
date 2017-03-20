define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _events, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdPagination = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var MdPagination = exports.MdPagination = (_dec = (0, _aureliaTemplating.customElement)('md-pagination'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdPagination(element) {
      _classCallCheck(this, MdPagination);

      _initDefineProp(this, 'mdActivePage', _descriptor, this);

      _initDefineProp(this, 'mdPages', _descriptor2, this);

      _initDefineProp(this, 'mdVisiblePageLinks', _descriptor3, this);

      _initDefineProp(this, 'mdPageLinks', _descriptor4, this);

      _initDefineProp(this, 'mdShowFirstLast', _descriptor5, this);

      _initDefineProp(this, 'mdShowPrevNext', _descriptor6, this);

      _initDefineProp(this, 'mdShowPageLinks', _descriptor7, this);

      this.numberOfLinks = 15;
      this.pages = 5;

      this.element = element;
    }

    MdPagination.prototype.bind = function bind() {
      this.pages = parseInt(this.mdPages, 10);

      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.mdShowFirstLast = (0, _attributes.getBooleanFromAttributeValue)(this.mdShowFirstLast);
      this.mdShowPrevNext = (0, _attributes.getBooleanFromAttributeValue)(this.mdShowPrevNext);
      this.mdPageLinks = this.generatePageLinks();
    };

    MdPagination.prototype.setActivePage = function setActivePage(page) {
      this.mdActivePage = parseInt(page, 10);
      this.mdPageLinks = this.generatePageLinks();
      (0, _events.fireMaterializeEvent)(this.element, 'page-changed', this.mdActivePage);
    };

    MdPagination.prototype.setFirstPage = function setFirstPage() {
      if (this.mdActivePage > 1) {
        this.setActivePage(1);
      }
    };

    MdPagination.prototype.setLastPage = function setLastPage() {
      if (this.mdActivePage < this.pages) {
        this.setActivePage(this.pages);
      }
    };

    MdPagination.prototype.setPreviousPage = function setPreviousPage() {
      if (this.mdActivePage > 1) {
        this.setActivePage(this.mdActivePage - 1);
      }
    };

    MdPagination.prototype.setNextPage = function setNextPage() {
      if (this.mdActivePage < this.pages) {
        this.setActivePage(this.mdActivePage + 1);
      }
    };

    MdPagination.prototype.mdPagesChanged = function mdPagesChanged() {
      this.pages = parseInt(this.mdPages, 10);
      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.setActivePage(1);
    };

    MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.mdPageLinks = this.generatePageLinks();
    };

    MdPagination.prototype.generatePageLinks = function generatePageLinks() {
      var midPoint = parseInt(this.numberOfLinks / 2, 10);
      var start = Math.max(this.mdActivePage - midPoint, 0);

      if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
      var end = Math.min(start + this.numberOfLinks, this.pages);

      var list = [];
      for (var i = start; i < end; i++) {
        list.push(i);
      }

      return list;
    };

    return MdPagination;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdActivePage', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdPages', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 5;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdVisiblePageLinks', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 15;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdPageLinks', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowFirstLast', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowPrevNext', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowPageLinks', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});