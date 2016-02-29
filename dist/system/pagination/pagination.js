System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, fireMaterializeEvent, MdPagination;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }],
    execute: function () {
      MdPagination = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdPagination, [{
          key: 'mdPages',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneWay
          })],
          initializer: function initializer() {
            return 5;
          },
          enumerable: true
        }, {
          key: 'mdActivePage',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdPagination(element) {
          _classCallCheck(this, _MdPagination);

          _defineDecoratedPropertyDescriptor(this, 'mdPages', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdActivePage', _instanceInitializers);

          this.element = element;
        }

        MdPagination.prototype.bind = function bind() {
          this.mdPages = parseInt(this.mdPages, 10);
        };

        MdPagination.prototype.setActivePage = function setActivePage(page) {
          this.mdActivePage = page;
          fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
        };

        var _MdPagination = MdPagination;
        MdPagination = inject(Element)(MdPagination) || MdPagination;
        MdPagination = customElement('md-pagination')(MdPagination) || MdPagination;
        return MdPagination;
      })();

      _export('MdPagination', MdPagination);
    }
  };
});