System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (_export) {
  'use strict';

  var bindable, customElement, inject, getBooleanFromAttributeValue, AttributeManager, MdSidenav;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      MdSidenav = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSidenav, [{
          key: 'closeOnClick',
          decorators: [bindable()],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'edge',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'left';
          },
          enumerable: true
        }, {
          key: 'fixed',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdWidth',
          decorators: [bindable()],
          initializer: function initializer() {
            return 250;
          },
          enumerable: true
        }], [{
          key: 'id',
          value: 0,
          enumerable: true
        }], _instanceInitializers);

        function MdSidenav(element) {
          _classCallCheck(this, _MdSidenav);

          _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'edge', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdWidth', _instanceInitializers);

          this.element = element;
          this.controlId = 'md-sidenav-' + MdSidenav.id++;
        }

        MdSidenav.prototype.attached = function attached() {
          this.attributeManager = new AttributeManager(this.sidenav);
          if (getBooleanFromAttributeValue(this.fixed)) {
            this.attributeManager.addClasses('fixed');
          }
        };

        MdSidenav.prototype.detached = function detached() {
          this.attributeManager.removeClasses('fixed');
        };

        MdSidenav.prototype.fixedChanged = function fixedChanged(newValue) {
          if (this.attributeManager) {
            if (newValue) {
              this.attributeManager.addClasses('fixed');
            } else {
              this.attributeManager.removeClasses('fixed');
            }
          }
        };

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
