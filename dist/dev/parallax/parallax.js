System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var customAttribute, inject, MdParallax;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      MdParallax = (function () {
        function MdParallax(element) {
          _classCallCheck(this, _MdParallax);

          this.element = element;
        }

        MdParallax.prototype.attached = function attached() {
          $(this.element).parallax();
        };

        MdParallax.prototype.detached = function detached() {};

        var _MdParallax = MdParallax;
        MdParallax = inject(Element)(MdParallax) || MdParallax;
        MdParallax = customAttribute('md-parallax')(MdParallax) || MdParallax;
        return MdParallax;
      })();

      _export('MdParallax', MdParallax);
    }
  };
});
//# sourceMappingURL=../dist/dev/parallax/parallax.js.map
