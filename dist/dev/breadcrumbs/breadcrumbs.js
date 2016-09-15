'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var customElement, inject, Router, _dec, _dec2, _class, MdBreadcrumbs;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('MdBreadcrumbs', MdBreadcrumbs = (_dec = customElement('md-breadcrumbs'), _dec2 = inject(Element, Router), _dec(_class = _dec2(_class = function () {
        function MdBreadcrumbs(element, router) {
          _classCallCheck(this, MdBreadcrumbs);

          this.element = element;
          this._childRouter = router;
          while (router.parent) {
            router = router.parent;
          }
          this.router = router;
        }

        MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
          this._childRouter.navigateToRoute(navigationInstruction.config.name);
        };

        return MdBreadcrumbs;
      }()) || _class) || _class));

      _export('MdBreadcrumbs', MdBreadcrumbs);
    }
  };
});
//# sourceMappingURL=../dist/dev/breadcrumbs/breadcrumbs.js.map
