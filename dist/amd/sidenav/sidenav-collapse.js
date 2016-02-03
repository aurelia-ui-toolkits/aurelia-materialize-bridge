define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdSidenavCollapse = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdSidenavCollapse, [{
      key: 'ref',
      decorators: [_aureliaTemplating.bindable()],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function MdSidenavCollapse(element, observerLocator) {
      _classCallCheck(this, _MdSidenavCollapse);

      _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers);

      this.element = element;
      this.observerLocator = observerLocator;
      this.log = _aureliaLogging.getLogger('md-sidenav-collapse');
    }

    MdSidenavCollapse.prototype.attached = function attached() {
      var _this = this;

      this.ref.whenAttached.then(function () {

        _this.element.setAttribute('data-activates', _this.ref.controlId);
        var sideNavConfig = {
          edge: _this.ref.mdEdge || 'left',
          closeOnClick: _this.ref.mdCloseOnClick,
          menuWidth: parseInt(_this.ref.mdWidth, 10)
        };

        $(_this.element).sideNav(sideNavConfig);
      });
    };

    MdSidenavCollapse.prototype.detached = function detached() {};

    var _MdSidenavCollapse = MdSidenavCollapse;
    MdSidenavCollapse = _aureliaDependencyInjection.inject(Element, _aureliaBinding.ObserverLocator)(MdSidenavCollapse) || MdSidenavCollapse;
    MdSidenavCollapse = _aureliaTemplating.customAttribute('md-sidenav-collapse')(MdSidenavCollapse) || MdSidenavCollapse;
    return MdSidenavCollapse;
  })();

  exports.MdSidenavCollapse = MdSidenavCollapse;
});