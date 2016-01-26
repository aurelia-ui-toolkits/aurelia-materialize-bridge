System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, customElement, inject, MdSidenav;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MdSidenav = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSidenav, [{
          key: 'edge',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'left';
          },
          enumerable: true
        }, {
          key: 'closeOnClick',
          decorators: [bindable()],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }], [{
          key: 'id',
          value: 0,
          enumerable: true
        }], _instanceInitializers);

        function MdSidenav(element) {
          _classCallCheck(this, _MdSidenav);

          _defineDecoratedPropertyDescriptor(this, 'edge', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers);

          this.element = element;
          this.controlId = 'md-sidenav-' + MdSidenav.id++;
        }

        MdSidenav.prototype.attached = function attached() {};

        var _MdSidenav = MdSidenav;
        MdSidenav = inject(Element)(MdSidenav) || MdSidenav;
        MdSidenav = customElement('md-sidenav')(MdSidenav) || MdSidenav;
        return MdSidenav;
      })();

      _export('MdSidenav', MdSidenav);
    }
  };
});
//# sourceMappingURL=../dist/dev/sidenav/sidenav.js.map
