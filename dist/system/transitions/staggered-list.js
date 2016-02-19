System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging', 'materialize'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, getLogger, MdStaggeredList;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_materialize) {}],
    execute: function () {
      MdStaggeredList = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdStaggeredList, [{
          key: 'ref',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdStaggeredList(element) {
          _classCallCheck(this, _MdStaggeredList);

          _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers);

          this.element = element;
          this.staggerList = this.staggerList.bind(this);
          this.log = getLogger('md-staggered-list');
        }

        MdStaggeredList.prototype.attached = function attached() {
          this.element.addEventListener('click', this.staggerList);
          this.ensureOpacity();
        };

        MdStaggeredList.prototype.detached = function detached() {
          this.element.removeEventListener('click', this.staggerList);
        };

        MdStaggeredList.prototype.staggerList = function staggerList() {
          Materialize.showStaggeredList(this.ref);
        };

        MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
          var items = this.ref.querySelectorAll('li');
          [].forEach.call(items, function (item) {
            var opacity = window.getComputedStyle(item).opacity;
            if (opacity !== 0) {
              item.style.opacity = 0;
            }
          });
        };

        var _MdStaggeredList = MdStaggeredList;
        MdStaggeredList = inject(Element)(MdStaggeredList) || MdStaggeredList;
        MdStaggeredList = customAttribute('md-staggered-list')(MdStaggeredList) || MdStaggeredList;
        return MdStaggeredList;
      })();

      _export('MdStaggeredList', MdStaggeredList);
    }
  };
});