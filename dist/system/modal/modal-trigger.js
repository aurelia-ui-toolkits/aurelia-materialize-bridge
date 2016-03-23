'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export, _context) {
  var customAttribute, inject, AttributeManager, _dec, _dec2, _class, MdModalTrigger;

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
      _export('MdModalTrigger', MdModalTrigger = (_dec = customAttribute('md-modal-trigger'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdModalTrigger(element) {
          _classCallCheck(this, MdModalTrigger);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdModalTrigger.prototype.attached = function attached() {
          this.attributeManager.addClasses('modal-trigger');
          $(this.element).leanModal();
        };

        MdModalTrigger.prototype.detached = function detached() {
          this.attributeManager.removeClasses('modal-trigger');
        };

        return MdModalTrigger;
      }()) || _class) || _class));

      _export('MdModalTrigger', MdModalTrigger);
    }
  };
});