define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdBreadcrumbs = (function () {
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
    MdBreadcrumbs = _aureliaDependencyInjection.inject(Element, _aureliaRouter.Router)(MdBreadcrumbs) || MdBreadcrumbs;
    MdBreadcrumbs = _aureliaTemplating.customElement('md-breadcrumbs')(MdBreadcrumbs) || MdBreadcrumbs;
    return MdBreadcrumbs;
  })();

  exports.MdBreadcrumbs = MdBreadcrumbs;
});