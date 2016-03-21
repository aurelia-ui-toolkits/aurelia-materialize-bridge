'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaRouter = require('aurelia-router');

var MdBreadcrumbs = (function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, _MdBreadcrumbs);

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

  var _MdBreadcrumbs = MdBreadcrumbs;
  MdBreadcrumbs = _aureliaDependencyInjection.inject(Element, _aureliaRouter.Router)(MdBreadcrumbs) || MdBreadcrumbs;
  MdBreadcrumbs = _aureliaTemplating.customElement('md-breadcrumbs')(MdBreadcrumbs) || MdBreadcrumbs;
  return MdBreadcrumbs;
})();

exports.MdBreadcrumbs = MdBreadcrumbs;