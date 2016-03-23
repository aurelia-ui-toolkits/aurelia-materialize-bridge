define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdBreadcrumbs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec(_class = _dec2(_class = function () {
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
  }()) || _class) || _class);
});