System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export) {
  'use strict';

  var customAttribute, inject, AttributeManager, MdModalTrigger;

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
      MdModalTrigger = (function () {
        function MdModalTrigger(element) {
          _classCallCheck(this, _MdModalTrigger);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdModalTrigger.prototype.attached = function attached() {
          this.attributeManager.addClasses('modal-trigger');
        };

        MdModalTrigger.prototype.detached = function detached() {
          this.attributeManager.removeClasses('modal-trigger');
        };

        var _MdModalTrigger = MdModalTrigger;
        MdModalTrigger = inject(Element)(MdModalTrigger) || MdModalTrigger;
        MdModalTrigger = customAttribute('md-modal-trigger')(MdModalTrigger) || MdModalTrigger;
        return MdModalTrigger;
      })();

      _export('MdModalTrigger', MdModalTrigger);
    }
  };
});