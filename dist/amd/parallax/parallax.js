define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdParallax = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdParallax = exports.MdParallax = (_dec = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdParallax(element) {
      _classCallCheck(this, MdParallax);

      this.element = element;
    }

    MdParallax.prototype.attached = function attached() {
      $(this.element).parallax();
    };

    MdParallax.prototype.detached = function detached() {};

    return MdParallax;
  }()) || _class) || _class);
});