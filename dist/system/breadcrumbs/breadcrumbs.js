'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inject, Router, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdBreadcrumbs;

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

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('MdBreadcrumbs', MdBreadcrumbs = (_dec = customElement('md-breadcrumbs'), _dec2 = inject(Element, Router), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdBreadcrumbs(element, router) {
          _classCallCheck(this, MdBreadcrumbs);

          _initDefineProp(this, 'router', _descriptor, this);

          this.element = element;
          this.aureliaRouter = router;
        }

        MdBreadcrumbs.prototype.bind = function bind() {
          if (!this.router) {
            this.router = this.aureliaRouter;
          }
          var router = this.router;
          this._childRouter = router;
          while (router.parent) {
            router = router.parent;
          }
          this.router = router;
        };

        MdBreadcrumbs.prototype.routerChanged = function routerChanged() {};

        MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
          this._childRouter.navigateToRoute(navigationInstruction.config.name);
        };

        return MdBreadcrumbs;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdBreadcrumbs', MdBreadcrumbs);
    }
  };
});