'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, _dec, _dec2, _class, MdParallax;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('MdParallax', MdParallax = (_dec = customAttribute('md-parallax'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdParallax(element) {
          _classCallCheck(this, MdParallax);

          this.element = element;
        }

        MdParallax.prototype.attached = function attached() {
          $(this.element).parallax();
        };

        MdParallax.prototype.detached = function detached() {};

        return MdParallax;
      }()) || _class) || _class));

      _export('MdParallax', MdParallax);
    }
  };
});