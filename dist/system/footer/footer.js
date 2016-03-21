System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export) {
  'use strict';

  var customAttribute, inject, AttributeManager, MdFooter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      MdFooter = (function () {
        function MdFooter(element) {
          _classCallCheck(this, _MdFooter);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdFooter.prototype.bind = function bind() {
          this.attributeManager.addClasses('page-footer');
        };

        MdFooter.prototype.unbind = function unbind() {
          this.attributeManager.removeClasses('page-footer');
        };

        var _MdFooter = MdFooter;
        MdFooter = inject(Element)(MdFooter) || MdFooter;
        MdFooter = customAttribute('md-footer')(MdFooter) || MdFooter;
        return MdFooter;
      })();

      _export('MdFooter', MdFooter);
    }
  };
});