define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdParallax = (function () {
    function MdParallax(element) {
      _classCallCheck(this, _MdParallax);

      this.element = element;
    }

    MdParallax.prototype.attached = function attached() {
      $(this.element).parallax();
    };

    MdParallax.prototype.detached = function detached() {};

    var _MdParallax = MdParallax;
    MdParallax = _aureliaDependencyInjection.inject(Element)(MdParallax) || MdParallax;
    MdParallax = _aureliaTemplating.customAttribute('md-parallax')(MdParallax) || MdParallax;
    return MdParallax;
  })();

  exports.MdParallax = MdParallax;
});