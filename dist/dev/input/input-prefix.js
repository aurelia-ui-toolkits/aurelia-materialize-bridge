'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, AttributeManager, _dec, _dec2, _class, MdPrefix;

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
      _export('MdPrefix', MdPrefix = (_dec = customAttribute('md-prefix'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdPrefix(element) {
          _classCallCheck(this, MdPrefix);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdPrefix.prototype.bind = function bind() {
          this.attributeManager.addClasses('prefix');
        };

        MdPrefix.prototype.unbind = function unbind() {
          this.attributeManager.removeClasses('prefix');
        };

        return MdPrefix;
      }()) || _class) || _class));

      _export('MdPrefix', MdPrefix);
    }
  };
});
//# sourceMappingURL=../dist/dev/input/input-prefix.js.map
