'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, AttributeManager, _dec, _dec2, _class, MdFooter;

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
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      _export('MdFooter', MdFooter = (_dec = customAttribute('md-footer'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdFooter(element) {
          _classCallCheck(this, MdFooter);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdFooter.prototype.bind = function bind() {
          this.attributeManager.addClasses('page-footer');
        };

        MdFooter.prototype.unbind = function unbind() {
          this.attributeManager.removeClasses('page-footer');
        };

        return MdFooter;
      }()) || _class) || _class));

      _export('MdFooter', MdFooter);
    }
  };
});
//# sourceMappingURL=../dist/dev/footer/footer.js.map
