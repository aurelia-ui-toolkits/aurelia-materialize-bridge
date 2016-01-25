System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, MdSidenavCollapse;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MdSidenavCollapse = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSidenavCollapse, [{
          key: 'ref',
          decorators: [bindable()],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdSidenavCollapse(element) {
          _classCallCheck(this, _MdSidenavCollapse);

          _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers);

          this.element = element;
        }

        MdSidenavCollapse.prototype.attached = function attached() {
          this.element.setAttribute('data-activates', this.ref.controlId);
          $(this.element).sideNav();
        };

        MdSidenavCollapse.prototype.detached = function detached() {};

        MdSidenavCollapse.prototype.toggleSidenav = function toggleSidenav() {
          $(this.element).sideNav('show');
        };

        var _MdSidenavCollapse = MdSidenavCollapse;
        MdSidenavCollapse = inject(Element)(MdSidenavCollapse) || MdSidenavCollapse;
        MdSidenavCollapse = customAttribute('md-sidenav-collapse')(MdSidenavCollapse) || MdSidenavCollapse;
        return MdSidenavCollapse;
      })();

      _export('MdSidenavCollapse', MdSidenavCollapse);
    }
  };
});