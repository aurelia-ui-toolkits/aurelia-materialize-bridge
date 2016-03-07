System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (_export) {
  'use strict';

  var customElement, inject, Router, MdBreadcrumbs;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      MdBreadcrumbs = (function () {
        function MdBreadcrumbs(element, router) {
          _classCallCheck(this, _MdBreadcrumbs);

          this.element = element;
          while (router.parent) {
            router = router.parent;
          }
          this.router = router;
        }

        MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {};

        var _MdBreadcrumbs = MdBreadcrumbs;
        MdBreadcrumbs = inject(Element, Router)(MdBreadcrumbs) || MdBreadcrumbs;
        MdBreadcrumbs = customElement('md-breadcrumbs')(MdBreadcrumbs) || MdBreadcrumbs;
        return MdBreadcrumbs;
      })();

      _export('MdBreadcrumbs', MdBreadcrumbs);
    }
  };
});
//# sourceMappingURL=../dist/dev/breadcrumbs/breadcrumbs.js.map
