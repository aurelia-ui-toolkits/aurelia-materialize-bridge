System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, bindingMode, inject, fireMaterializeEvent, getBooleanFromAttributeValue, MdPagination;

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
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdPagination = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdPagination, [{
          key: 'mdActivePage',
          decorators: [bindable({
            defaultBindingMode: bindingMode.twoWay
          })],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'mdPages',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneWay
          })],
          initializer: function initializer() {
            return 5;
          },
          enumerable: true
        }, {
          key: 'mdShowFirstLast',
          decorators: [bindable()],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'mdShowPrevNext',
          decorators: [bindable()],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdPagination(element) {
          _classCallCheck(this, _MdPagination);

          _defineDecoratedPropertyDescriptor(this, 'mdActivePage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdPages', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdShowFirstLast', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdShowPrevNext', _instanceInitializers);

          this.element = element;
        }

        MdPagination.prototype.bind = function bind() {
          this.mdPages = parseInt(this.mdPages, 10);
          this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
        };

        MdPagination.prototype.setActivePage = function setActivePage(page) {
          this.mdActivePage = page;
          fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
        };

        MdPagination.prototype.setFirstPage = function setFirstPage() {
          if (this.mdActivePage > 1) {
            this.setActivePage(1);
          }
        };

        MdPagination.prototype.setLastPage = function setLastPage() {
          if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdPages);
          }
        };

        MdPagination.prototype.setPreviousPage = function setPreviousPage() {
          if (this.mdActivePage > 1) {
            this.setActivePage(this.mdActivePage - 1);
          }
        };

        MdPagination.prototype.setNextPage = function setNextPage() {
          if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdActivePage + 1);
          }
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
//# sourceMappingURL=../dist/dev/pagination/pagination.js.map
